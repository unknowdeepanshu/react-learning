import { Outlet } from "react-router";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function Layout() {
  return (
    <>
      <div className="flex w-max flex-col md:w-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
