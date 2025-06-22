import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useHomeViewModel from "./_useHomeViewModel";
import Footer from "../components/Footer";

export default function HomeView() {
  const model = useHomeViewModel()
  return (
    <div className="flex">
      <Sidebar isOpen={model.isOpen} setIsOpen={model.setIsOpen} menuButtonRef={model.menuButtonNavbarRef} />
      <div className={"flex-1 min-h-screen flex flex-col "}>
        <Navbar isOpen={model.isOpen} setIsOpen={model.setIsOpen} menuButtonRef={model.menuButtonNavbarRef} />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
