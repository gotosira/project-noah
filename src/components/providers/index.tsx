import { RecoilRoot } from "recoil";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthProvider } from "@/components/providers/auth-provider";

import { ChildrenProps } from "@/types/globals";

import { APP_NAME } from "@/lib/constants";

function providers({ children }: ChildrenProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey={`${APP_NAME}-ui-theme`}>
          {children}
        </ThemeProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default providers;
