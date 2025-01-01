import NavBar from "@/views/components/navbar";
import React from "react";
import Choices from "./components/choice.components";
import Footer from "@/views/components/footer";

export default function DashboardView() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow">
        <Choices />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
