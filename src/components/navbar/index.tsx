import NavLinks from "./nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 text-sm font-sarabun text-muted-foreground border rounded-radii-4xs px-2 py-1">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>{user.name}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="font-sarabun">Signed in</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
