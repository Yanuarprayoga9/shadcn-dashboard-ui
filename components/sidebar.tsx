"use client"
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
    AlertCircle,
    Archive,
    ArchiveX,
    File,
    Inbox,
    MessagesSquare,
    PenBox,
    Search,
    Send,
    ShoppingCart,
    Trash2,
    Users2,
  } from "lucide-react"
  import { useWindowWidth } from "@react-hook/window-size";
const Sidebar = () => {
    const useWidth = useWindowWidth()
    console.log(useWidth)
    const [isCollapsed,setIsColapsed] = useState<boolean>(false)
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <Nav
        isCollapsed={isCollapsed}
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
