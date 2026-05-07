import { Outlet } from "react-router-dom";
import Nabar from "./Nabar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Nabar />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
