import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  user: User | null;
  isInitialized: boolean;
}

interface User {
  id: string;
  email: string;
  name: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const rawAllowed = (import.meta.env.VITE_ALLOWED_EMAILS as string | undefined) ?? "";
  const ALLOWED_EMAILS = rawAllowed.split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
  const allowAll = ALLOWED_EMAILS.length === 0;
  const isAllowed = (email?: string | null) => allowAll || (!!email && ALLOWED_EMAILS.includes(email.toLowerCase()));

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      if (!isAllowed(email)) {
        return false;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error || !data.user) {
        return false;
      }

      const signedInUser: User = {
        id: data.user.id,
        email: data.user.email ?? email,
        name: (data.user.email ?? email).split("@")[0],
      };

      setUser(signedInUser);
      setIsAuthenticated(true);
      localStorage.setItem("auth", JSON.stringify({ user: signedInUser, isAuthenticated: true }));
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const signup = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      const base = ((import.meta as any)?.env?.BASE_URL as string) || "/";
      const redirectBase = new URL(base, window.location.origin).toString();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Redirect to app root; supabase-js will process the hash on any route
          emailRedirectTo: `${redirectBase}`,
        },
      });

      if (error) {
        return { success: false, message: error.message };
      }

      return { success: true, message: "Check your email to confirm your account." };
    } catch (error) {
      console.error("Signup failed:", error);
      return { success: false, message: "Signup failed" };
    }
  };

  const logout = () => {
    supabase.auth.signOut().catch(() => {});
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  // Check for existing auth on mount (Supabase session)
  useEffect(() => {
    const init = async () => {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        const currentUser = sessionData.session?.user ?? null;
        if (currentUser && isAllowed(currentUser.email)) {
          const u: User = {
            id: currentUser.id,
            email: currentUser.email ?? "",
            name: (currentUser.email ?? "").split("@")[0],
          };
          setUser(u);
          setIsAuthenticated(true);
          localStorage.setItem("auth", JSON.stringify({ user: u, isAuthenticated: true }));
        } else {
          await supabase.auth.signOut();
          setUser(null);
          setIsAuthenticated(false);
          localStorage.removeItem("auth");
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
      } finally {
        setIsInitialized(true);
      }
    };

    void init();

    // Listen to auth state changes to keep UI in sync and enforce allowed email
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      if (currentUser && isAllowed(currentUser.email)) {
        const u: User = {
          id: currentUser.id,
          email: currentUser.email ?? "",
          name: (currentUser.email ?? "").split("@")[0],
        };
        setUser(u);
        setIsAuthenticated(true);
        localStorage.setItem("auth", JSON.stringify({ user: u, isAuthenticated: true }));
      } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    isAuthenticated,
    login,
    signup,
    loginWithGoogle: async () => {
      const base = ((import.meta as any)?.env?.BASE_URL as string) || "/";
      const redirectBase = new URL(base, window.location.origin).toString();
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${redirectBase}`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
    },
    logout,
    user,
    isInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
