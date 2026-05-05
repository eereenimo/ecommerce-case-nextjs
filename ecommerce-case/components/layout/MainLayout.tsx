import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area expands to fill space */}
      <main className="flex-grow">{children}</main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
