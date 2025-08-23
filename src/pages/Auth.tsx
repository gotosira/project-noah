import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "@/components/wrapper";
import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
import { TokenButton } from "@/components/ui/token-button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/components/providers/auth-provider";

const Auth = () => {
  const defaultEmail = (import.meta.env.VITE_ALLOWED_EMAILS as string | undefined)?.split(',')[0]?.trim() || "sira.hanchana@gmail.com";
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [info, setInfo] = useState("");
  
  const { login, signup, loginWithGoogle, isAuthenticated, isInitialized } = useAuth();
  const navigate = useNavigate();

  // Show loading while checking authentication
  if (!isInitialized) {
    return (
      <Wrapper className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-body-sm font-sarabun text-muted-foreground">Loading...</p>
        </div>
      </Wrapper>
    );
  }

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setInfo("");

    try {
      if (mode === "signin") {
        const success = await login(email, password);
        if (success) {
          navigate("/");
        } else {
          setError("Invalid email or password");
        }
      } else {
        const res = await signup(email, password);
        if (res.success) {
          setInfo(res.message || "Check your email to confirm your account.");
        } else {
          setError(res.message || "Signup failed");
        }
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper className="flex min-h-screen bg-background">
      <div className="m-auto grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="hidden md:flex flex-col justify-center rounded-radii-4xs border border-border bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--accent))] p-8">
          <h2 className="text-heading-2xl font-aktiv-grotesk-thai text-foreground">Welcome to Project Noah</h2>
          <p className="mt-2 text-body-md font-sarabun text-muted-foreground max-w-md">Sign in to continue and manage your design system. You can switch theme anytime.</p>
        </div>

        <div className="space-y-8 p-8 bg-card text-card-foreground rounded-radii-4xs shadow-3xs border border-border">
          <div className="text-center">
          <H1 className="text-foreground">{mode === 'signin' ? 'Welcome Back' : 'Create Account'}</H1>
          <H2 className="text-muted-foreground">{mode === 'signin' ? 'Sign in to your account' : 'Sign up with your email'}</H2>
          </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-sarabun font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-space-4 py-space-2 border border-border rounded-radii-4xs bg-background text-foreground font-sarabun text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-sarabun font-medium text-foreground mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-space-4 py-space-2 border border-border rounded-radii-4xs bg-background text-foreground font-sarabun text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="text-body-sm font-sarabun text-red-600 bg-red-50 border border-red-200 p-space-4 rounded-radii-4xs">
              {error}
            </div>
          )}
          {info && (
            <div className="text-body-sm font-sarabun text-green-700 bg-green-50 border border-green-200 p-space-4 rounded-radii-4xs">
              {info}
            </div>
          )}

          <TokenButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (mode === 'signin' ? 'Signing in...' : 'Signing up...') : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
          </TokenButton>
        </form>

        <div className="relative">
          <div className="my-4 h-px bg-border" />
        </div>

        <TokenButton
          type="button"
          variant="outline"
          size="lg"
          className="w-full"
          onClick={() => loginWithGoogle()}
          iconLeft={<FcGoogle />}
        >
          Continue with Google
        </TokenButton>

        <div className="text-center text-body-sm font-sarabun text-muted-foreground">
          {mode === 'signin' ? (
            <button className="underline" onClick={() => setMode('signup')}>Create an account</button>
          ) : (
            <button className="underline" onClick={() => setMode('signin')}>Have an account? Sign in</button>
          )}
        </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Auth;
