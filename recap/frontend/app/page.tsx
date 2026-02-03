"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Mail, FileText, Calendar, Settings, BarChart, Users } from "lucide-react";

const dockItems = [
  { title: "Email", icon: <Mail className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />, href: "#" },
  { title: "Documents", icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />, href: "#" },
  { title: "Calendar", icon: <Calendar className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />, href: "#" },
  { title: "Analytics", icon: <BarChart className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />, href: "#" },
  { title: "Team", icon: <Users className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />, href: "#" },
  { title: "Settings", icon: <Settings className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />, href: "#" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl p-8 pb-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">Welcome</h1>
          <p className="text-neutral-500 dark:text-neutral-400">Explore your options below</p>
        </div>
        <BentoGrid>
          <BentoCard
            name="Email Management"
            description="Manage and organize your emails efficiently with our powerful email tools."
            href="#"
            cta="View Emails"
            Icon={Mail}
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/80 to-neutral-100/80 dark:from-neutral-800/80 dark:to-neutral-900/80" />
            }
          />
          <BentoCard
            name="Documents"
            description="Access and manage all your documents in one place with smart organization."
            href="#"
            cta="Open Documents"
            Icon={FileText}
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/60 to-neutral-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60" />
            }
          />
          <BentoCard
            name="Calendar"
            description="Stay organized with your schedule and never miss an important event."
            href="#"
            cta="View Calendar"
            Icon={Calendar}
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800" />
            }
          />
          <BentoCard
            name="Analytics"
            description="Get insights into your productivity and track your progress over time."
            href="#"
            cta="View Analytics"
            Icon={BarChart}
            className="col-span-3 lg:col-span-2"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/70 to-neutral-300/70 dark:from-neutral-800/70 dark:to-neutral-700/70" />
            }
          />
          <BentoCard
            name="Team"
            description="Collaborate with your team members and manage shared resources."
            href="#"
            cta="View Team"
            Icon={Users}
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-300/50 dark:from-neutral-900/90 dark:to-neutral-700/50" />
            }
          />
          <BentoCard
            name="Settings"
            description="Customize your experience and configure application preferences."
            href="#"
            cta="Open Settings"
            Icon={Settings}
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/50 to-neutral-400/50 dark:from-neutral-700/50 dark:to-neutral-600/50" />
            }
          />
        </BentoGrid>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          items={dockItems}
          desktopClassName="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800 shadow-lg shadow-neutral-900/10"
          mobileClassName="fixed bottom-6 right-6 z-50"
        />
      </div>
    </div>
  );
}
