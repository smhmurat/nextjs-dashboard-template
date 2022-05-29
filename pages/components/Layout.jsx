import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex items-start">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
