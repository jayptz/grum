"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Mail, FileText, Calendar, Settings, BarChart, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="mx-auto max-w-6xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-neutral-500">Explore your options below</p>
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
              <div className="absolute inset-0 bg-linear-to-br from-neutral-800/80 to-neutral-900/80" />
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
              <div className="absolute inset-0 bg-linear-to-br from-neutral-700/60 to-neutral-800/60" />
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
              <div className="absolute inset-0 bg-linear-to-br from-neutral-900 to-neutral-800" />
            }
          />
          <BentoCard
            name="Analytics"
            description="Get insights into your productivity and track your progress over time."
            href="#"
            cta="View Analytics"
            Icon={BarChart}
            className="col-span-3 lg:col-span-1"
            background={
              <div className="absolute inset-0 bg-linear-to-br from-neutral-800/70 to-neutral-700/70" />
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
              <div className="absolute inset-0 bg-linear-to-br from-neutral-900/90 to-neutral-700/50" />
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
              <div className="absolute inset-0 bg-linear-to-br from-neutral-700/50 to-neutral-600/50" />
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
}
