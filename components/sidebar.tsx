"use client";
import React, { useEffect, useState } from "react";
import { SideNav } from "./ui/side-nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import useSidebarStore from "@/hooks/use-sidebar";
const Sidebar = () => {
  const [mounted, setIsMounted] = useState(false);
  const isOpen = useSidebarStore(state => state.isOpen);
  const action = useSidebarStore(state => state.action);
  
  const useWidth = useWindowWidth();
  const mobile = useWidth < 768;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className={cn("relative min-w-[3/12]   border-r  pb-10 pt-16",
    {"w-3/12" : isOpen === false},
    {"hidden":mobile && !isOpen},
    {"fixed z-10 w-6/12 bg-white":mobile && isOpen},
    )}>
      { isOpen ? null : (
        <div className="absolute top-2 right-24">
          
          <h1 className="text-4xl font-serif italic  flex gap-x-2 "><ShoppingCart className="text-4xl mt-2 " /> Yanuar</h1>
        </div>
      )}

      <div className="absolute right-[-20px] top-4 ">
        <Button
          variant={`secondary`}
          className=" rounded-full p-2"
          onClick={() => {
            action(isOpen);
          }}
        >
          <ChevronRight />
        </Button>
      </div>
      <SideNav
        isCollapsed={isOpen}
        links={[
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Drafts",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Junk",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
          },
          {
            title: "Trash",
            label: "",
            icon: Trash2,
            variant: "ghost",
          },
          {
            title: "Archive",
            label: "",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
