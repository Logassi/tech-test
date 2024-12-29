"use client";
import useAuthStore from "@/stores/user.store";
import NavBar from "@/views/components/navbar";
import React from "react";

export default function DashboardView() {
  const { user } = useAuthStore();

  return (
    <div>
      <NavBar />
      DashboardView
      <p>{` ${user?.userName}`}</p>
    </div>
  );
}
