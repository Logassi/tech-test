import Footer from "@/views/components/footer";
import NavBar from "@/views/components/navbar";
import React from "react";

export default function CreateQuizView() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <p>CreateQuizView</p>
        <p>User may view all the created Quizzes</p>
        <p>User may edit </p>
        <p>There is button for user to go to page with form to create quiz</p>
      </main>

      <Footer />
    </div>
  );
}
