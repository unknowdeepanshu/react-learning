import { Outlet } from "react-router";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function Layout() {
  return (
    <>
      <div className="flex h-screen w-full flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
