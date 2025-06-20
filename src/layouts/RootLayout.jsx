import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/AppSidebar";

const RootLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="">
        <SidebarProvider className="flex flex-col">
          <Header />
          <AppSidebar />
          <main className=" overflow-auto">
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default RootLayout;
