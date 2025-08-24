import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));
const Welcome = lazy(() => import("@/pages/Welcome"));
const Profile = lazy(() => import("@/pages/Profile"));
const DesignTokensDemo = lazy(() => import("@/components/design-tokens-demo"));
const ButtonDemo = lazy(() => import("@/components/button-demo"));

import Navbar from "@/components/navbar";

import Providers from "@/components/providers";
import ProtectedRoute from "@/components/protected-route";

function App() {
  return (
    <Providers>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/design-tokens" element={<DesignTokensDemo />} />
            <Route path="/button-demo" element={<ButtonDemo />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/auth" element={<Auth />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
