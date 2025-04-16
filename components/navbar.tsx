"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full sticky top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center bg-green-950 p-4">
        <Link href="/">
          <h2 className="font-bold text-3xl italic font-serif px-4 text-white">
            GiggFlow
          </h2>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-4 text-sm font-semibold text-white hidden md:flex">
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-white hover:bg-green-900 transition-colors px-4 py-2 rounded-md"
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-white hover:bg-green-900 rounded-md px-4 py-2 transition-colors"
              >
                About Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-white hover:bg-green-900 rounded-md px-4 py-2 transition-colors"
              >
                Contact Us
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex md:hidden text-white px-4">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <p className="text-muted-foreground">Navigation</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" className="text-sm">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="text-sm">
                  About us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="text-sm">
                  Contact Us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenu>
      </div>
      <div className="w-full bg-background text-accent-foreground text-sm p-2 flex justify-around px-2">
        <h3 className="text-muted-foreground text-xs">+234 01 453 8870</h3>
        <h3 className="text-muted-foreground text-xs">nkca122@gmail.com</h3>
      </div>
    </div>
  );
}
