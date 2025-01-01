import NavBar from "@/views/components/navbar";
import React from "react";
import HowToCreateQuizzes from "./components/howToCreateQuizzes.component";
import HowToTakeQuizzes from "./components/howToTakeQuizzes.component";
import Footer from "@/views/components/footer";

export default function HomeView() {
  return (
    <div>
      <NavBar />
      <HowToCreateQuizzes />
      <HowToTakeQuizzes />
      <Footer />
    </div>
  );
}
