"use client";
import useAuthStore from "@/stores/user.store";
import NavBar from "@/views/components/navbar";
import { useRouter } from "next/navigation";
import React from "react";
import Choices from "./components/choice.components";

export default function DashboardView() {
  // const { user } = useAuthStore();
  const router = useRouter();

  return (
    <div>
      <NavBar />
      {/* <div className="flex flex-col text-xl font-semibold mb-8 items-center">
        Dashboard
      </div> */}
      <Choices />
    </div>
  );
}
