import Footer from "@/views/components/footer";
import NavBar from "@/views/components/navbar";
import React from "react";

export default function TakeQuizView() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <p>TakeQuizView</p>
        <p>User may search Quizzes Available</p>
        <p>User may see all the Quizzes Taken (Score, Right-Wrong Answers)</p>
        <p>User may take the Quizzes Available</p>
      </main>

      <Footer />
    </div>
  );
}
