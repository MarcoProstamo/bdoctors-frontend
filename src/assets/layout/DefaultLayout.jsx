import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
