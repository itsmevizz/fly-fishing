import { ReactNode } from "react";
import AppHeader from "./header";
import AppFooter from "./footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <AppHeader />
      {children}
      <AppFooter />
    </main>
  );
};
export default AppLayout;
