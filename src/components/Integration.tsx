"use client";

import { motion } from "framer-motion";
import { Button, Container, SectionHeader } from "./shared";
import { ChevronRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export default function Integration() {
  const [activeTab, setActiveTab] = useState(1); // Start with Frameworks tab

  const frameworks = [
    {
      name: "React",
      icon: "/react-icon.svg",
      text: "Integrate in React",
    },
    {
      name: "Flutter",
      icon: "/flutter.svg",
      text: "Integrate in Flutter",
    },
    {
      name: "Android",
      icon: "/android.svg",
      text: "Integrate in Android",
    },
    {
      name: "IOS",
      icon: "/ios.svg",
      text: "Integrate in IOS",
    },
  ];

  const touchpoints = [
    {
      icon: "/android.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "No in-building proof" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Disputes escalate" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "False claims slip" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Refunds spiral out" }
      ]
    },
    {
      icon: "/flutter.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "No in-building proof" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Disputes escalate" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "False claims slip" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Refunds spiral out" }
      ]
    },
    {
      icon: "/ios.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "No in-building proof" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Disputes escalate" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "False claims slip" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Refunds spiral out" }
      ]
    },
    {
      icon: "/react-icon.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "No in-building proof" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Disputes escalate" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "False claims slip" },
        { icon: <CircleCheck className="size-4 text-white fill-accent" />, text: "Refunds spiral out" }
      ]
    }
  ];

  const tabs = [
    { id: 0, name: "Integration", label: "INTEGRATION" },
    { id: 1, name: "Frameworks", label: "FRAMEWORKS" },
    { id: 2, name: "Touchpoints", label: "TOUCHPOINTS" }
  ];

  return (
    <Container className="border-medium-gray flex flex-col border-y-0 py-12 sm:py-20">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-8 px-4 pb-12 sm:px-8 lg:flex-row">
        <SectionHeader
          tag="Integration"
          title={
            <>
              Integrate the
              <span className="text-primary"> SDK </span>into your driver app
            </>
          }
        />
      </div>
      <div className="flex items-center justify-between px-4 pb-12 sm:px-8">
        {/* Navigation Tabs */}
        <motion.div
          className="font-geist-mono flex gap-8 text-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 uppercase transition-colors duration-300",
                activeTab === tab.id ? "text-primary" : "text-accent"
              )}
            >
              {activeTab === tab.id && (
                <div className="bg-primary size-2"></div>
              )}
              {tab.label}
            </button>
          ))}
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 self-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Button variant="outline" className="px-6 py-2 text-sm">
            GET A DEMO
          </Button>
          <Button variant="primary" className="px-6 py-2 text-sm">
            CONTACT US
          </Button>
        </motion.div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Tab 1: Integration (Placeholder) */}
        {activeTab === 0 && (
          <div className="flex min-h-[360px] items-center justify-center px-4">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-medium text-black">Integration Tab</h3>
              <p className="text-accent text-lg">Placeholder content for Integration tab</p>
              <p className="text-accent mt-2 text-sm">This will contain integration-specific content</p>
            </div>
          </div>
        )}

        {/* Tab 2: Frameworks */}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                className={clsx(
                  "border-medium-gray flex min-h-[360px] flex-col items-start justify-between gap-4 border-y p-4",
                  (index === 0 || index == 2) && "border-r-medium-gray border-r",
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  background: "#ebebeb"
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={framework.icon}
                  width={80}
                  height={80}
                  alt={framework.name}
                  className="size-[80px]"
                />
                <div className="text-accent font-medium">
                  {framework.text}{" "}
                  <motion.span className="inline-flex items-center text-black">
                    in less than 1 hour
                    <ChevronRight className="size-4 mt-0.5" />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 3: Touchpoints */}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {touchpoints.map((touchpoint, index) => (
              <motion.div
                key={index}
                className={clsx(
                  "border-medium-gray flex min-h-[360px] flex-col items-start justify-between gap-6 border-y p-6",
                  (index === 0 || index === 2) && "border-r-medium-gray border-r",
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={touchpoint.icon}
                    width={32}
                    height={32}
                    alt="Touchpoint icon"
                    className="size-8"
                  />
                  <h3 className="text-lg font-medium text-black">{touchpoint.title}</h3>
                </div>
                <div className="space-y-3">
                  {touchpoint.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="flex items-center gap-3">
                      {problem.icon}
                      <span className="text-accent text-sm">{problem.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </Container>
  );
}
