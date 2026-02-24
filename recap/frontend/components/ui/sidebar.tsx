"use client";

import { cn } from "@/lib/utils";
import {
  Mail,
  FileText,
  Calendar,
  BarChart,
  Users,
  Settings,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const navItems = [
  { title: "Email", icon: Mail, href: "#" },
  { title: "Documents", icon: FileText, href: "#" },
  { title: "Calendar", icon: Calendar, href: "#" },
  { title: "Analytics", icon: BarChart, href: "#" },
  { title: "Team", icon: Users, href: "#" },
];

const bottomItems = [
  { title: "Settings", icon: Settings, href: "#" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Email");

  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-y-0 left-0 z-40 flex flex-col border-r border-neutral-800 bg-neutral-950"
    >
      <div className="flex h-14 items-center justify-between px-4">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-lg font-semibold tracking-tight text-white"
            >
              Recap
            </motion.span>
          )}
        </AnimatePresence>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          {collapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="mt-2 flex flex-1 flex-col gap-1 px-2">
        {navItems.map((item) => {
          const isActive = active === item.title;
          return (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.title);
              }}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <AnimatePresence mode="wait">
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="truncate"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
              {collapsed && (
                <div className="pointer-events-none absolute left-full ml-2 rounded-md bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                  {item.title}
                </div>
              )}
            </a>
          );
        })}
      </div>

      <div className="flex flex-col gap-1 border-t border-neutral-800 p-2">
        {bottomItems.map((item) => {
          const isActive = active === item.title;
          return (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.title);
              }}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <AnimatePresence mode="wait">
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="truncate"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
              {collapsed && (
                <div className="pointer-events-none absolute left-full ml-2 rounded-md bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                  {item.title}
                </div>
              )}
            </a>
          );
        })}
      </div>
    </motion.aside>
  );
}
