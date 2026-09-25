import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

function Layout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/maldives.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-black/40">
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;