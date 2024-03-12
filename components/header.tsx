import { cn } from "@/lib/utils";
import React, { ReactHTMLElement } from "react";
interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ title,  }) => {
  return <h1 className={cn("font-bold text-4xl")}>{title}</h1>;
};

