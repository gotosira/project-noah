import NavLinks from "./nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";

import H4 from "@/components/typo/H4";
import { LogOut, User } from "lucide-react";

const navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed top-0 overflow-hidden w-full flex items-center justify-between px-4 h-16 z-10 backdrop-blur bg-background/70 border-b border-border">
      <H4 className="text-foreground font-sarabun">Project Noah</H4>
      <div className="flex items-center justify-center gap-4">
        {isAuthenticated && <NavLinks />}
        
        {isAuthenticated && user && (
          <div className="flex items-center gap-2 text-sm font-sarabun text-muted-foreground">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>{user.name}</span>
          </div>
        )}
        
        {isAuthenticated && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default navbar;
