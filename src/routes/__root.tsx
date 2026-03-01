import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/header";

function RootLayout() {
  return (
    <div className="h-screen grid grid-rows-[3rem_1fr]">
      <Header />
      <Outlet />
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
