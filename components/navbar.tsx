"use client";
import React, { useEffect, useState } from "react";
import { MainNav } from "./ui/main-nav";
import { UserNav } from "./ui/user-nav";
import { MenuIcon, ShoppingCart } from "lucide-react";
import useSidebarStore from "@/hooks/use-sidebar";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

export const Navbar = () => {
  const action = useSidebarStore((state) => state.action);
  const isOpen = useSidebarStore((state) => state.isOpen);
  const useWidth = useWindowWidth();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  const mobile = useWidth < 768;
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* <TeamSwitcher /> */}
        {mobile && mounted && !isOpen ? (
          <Button
            onClick={() => {
              action(isOpen);
            }}
          >
            <MenuIcon />
          </Button>
        ) : null}
        
        {!isOpen && !mobile && mounted ? 
        <MainNav className="mx-6" /> : (
          <div className="absolute  right-24">
            <h1 className="text-4xl font-serif italic  flex gap-x-2 ">
              <ShoppingCart className="text-4xl mt-2 " /> Yanuar
            </h1>
          </div>
        )}
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          <UserNav />
        </div>
      </div>
    </div>
  );
};
