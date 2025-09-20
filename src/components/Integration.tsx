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
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "No in-building proof",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Disputes escalate",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "False claims slip",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Refunds spiral out",
        },
      ],
    },
    {
      icon: "/flutter.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "No in-building proof",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Disputes escalate",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "False claims slip",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Refunds spiral out",
        },
      ],
    },
    {
      icon: "/ios.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "No in-building proof",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Disputes escalate",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "False claims slip",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Refunds spiral out",
        },
      ],
    },
    {
      icon: "/react-icon.svg",
      title: "Integration in ~4 simple steps",
      problems: [
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "No in-building proof",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Disputes escalate",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "False claims slip",
        },
        {
          icon: <CircleCheck className="fill-accent size-4 text-white" />,
          text: "Refunds spiral out",
        },
      ],
    },
  ];

  const integrationContent = [
    {
      icon: "/react-icon.svg", // Using atom-like icon placeholder
      title: "How does doorstep's technology work?",
      description: "",
      features: []
    },
    {
      icon: "/flutter.svg", // Using atom-like icon placeholder
      title: "How does doorstep's technology work?",
      description: "",
      features: [
        "Automatic detection of stairs vs. elevator usage",
        "Verification of the floor reached", 
        "Flagging anomalies in vertical movement"
      ]
    },
    {
      icon: "/android.svg",
      title: "How does doorstep's technology work?",
      description: "",
      features: []
    },
    {
      icon: "/ios.svg",
      title: "How does doorstep's technology work?",
      description: "Our team of top PHDs and researchers have spent years to build out physics-based sensor fusion algorithms, to solve the more critical outdoor to indoor positioning problem.",
      features: []
    }
  ];

  const tabs = [
    { id: 0, name: "Integration", label: "INTEGRATION" },
    { id: 1, name: "Frameworks", label: "FRAMEWORKS" },
    { id: 2, name: "Touchpoints", label: "TOUCHPOINTS" },
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
                activeTab === tab.id
                  ? "text-primary underline underline-offset-8"
                  : "text-accent",
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
          <Button
            variant="outline"
            className="border-medium-gray bg-card hover:bg-card hover:border-primary group text-black"
          >
            <a
              href="https://calendly.com/d/cmqb-cg3-ywg/doorstep-intro-chat"
              className="group-hover:text-primary"
            >
              Get a demo
            </a>
          </Button>
          <Button variant="primary" className="px-6 py-2 text-sm">
            <a
              href="https://calendly.com/d/cmqb-cg3-ywg/doorstep-intro-chat"
            >
              contact us
            </a>
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
        {/* Tab 1: Integration */}
        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {integrationContent.map((item, index) => (
              <motion.div
                key={index}
                className={clsx(
                  "border-medium-gray flex min-h-[360px] flex-col items-start justify-between gap-6 border-y p-6",
                  (index === 0 || index === 2) &&
                    "border-r-medium-gray border-r",
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    width={32}
                    height={32}
                    alt="Integration icon"
                    className="size-8"
                  />
                  <h3 className="text-lg font-medium text-black">
                    {item.title}
                  </h3>
                </div>
                
                {item.features.length > 0 && (
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CircleCheck className="fill-accent size-4 text-white" />
                        <span className="text-accent text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                
                {item.description && (
                  <p className="text-accent text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
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
                  (index === 0 || index == 2) &&
                    "border-r-medium-gray border-r",
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  background: "#f5f5f5",
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
                    <ChevronRight className="mt-0.5 size-4" />
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
                  (index === 0 || index === 2) &&
                    "border-r-medium-gray border-r",
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={touchpoint.icon}
                    width={32}
                    height={32}
                    alt="Touchpoint icon"
                    className="size-8"
                  />
                  <h3 className="text-lg font-medium text-black">
                    {touchpoint.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {touchpoint.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="flex items-center gap-3">
                      {problem.icon}
                      <span className="text-accent text-sm">
                        {problem.text}
                      </span>
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
