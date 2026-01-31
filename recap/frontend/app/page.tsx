"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Mail, FileText, Calendar, Settings, BarChart, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome</h1>
          <p className="text-muted-foreground">Explore your options below</p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-pink-500/20" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-500/20" />
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
}
