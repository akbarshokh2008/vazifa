import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
function MainLayout() {
  return (
    <>
      <Header />
      <main className="site-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
