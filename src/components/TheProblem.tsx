"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "./shared";
import { Building, Settings, Clock } from "lucide-react";
import Image from 'next/image';
import clsx from "clsx";
import { useState } from "react";

export default function TheProblem() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Building className="size-4 text-gray-500" />,
      title: "Automatic detection of stairs vs. elevator usage",
      description: "Advanced sensors detect whether delivery personnel used stairs or elevators, providing crucial context for delivery verification.",
      image: "/tab-content-1.svg",
      stat: "85%",
      statLabel: "Detection Accuracy"
    },
    {
      icon: <Settings className="size-4 text-gray-500" />,
      title: "Verification of the floor reached",
      description: "Detect vertical movement with proof of how drivers move inside buildings, ensuring accurate floor-level delivery confirmation.",
      image: "/tab-content-2.svg",
      stat: "92%",
      statLabel: "Floor Verification"
    },
    {
      icon: <Clock className="size-4 text-gray-500" />,
      title: "Elevation changes are logged with timestamps",
      description: "Real-time tracking of elevation changes with precise timestamps for complete delivery audit trails.",
      image: "/problem.svg",
      stat: "100%",
      statLabel: "Timestamp Accuracy"
    },
  ];

  return (
    <>
      <Container className="relative z-10 py-12 sm:py-20 !border-b-0">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 px-4 pb-12 sm:px-8 lg:flex-row">
          <SectionHeader
            tag="The Solution"
            title={
              <>
                Power your team with precise{" "}
                <span className="text-primary">drop-off</span> visibility
              </>
            }
            description="Making sure a driver delivered to the right building and floor is key to accurate refunds and operations."
            layout="row"
          />
        </div>

        <motion.div
          className="border-medium-gray relative overflow-hidden border border-x-0 border-b-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 relative border-b border-b-medium-gray">
              {/* Left side - Stats and Tab Features */}
              <div className="flex flex-col gap-32 px-8">
                {/* Static problem statistic */}
                <motion.div
                  className="border-l-2 border-black pl-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="mb-2 text-6xl font-normal text-black lg:text-7xl">
                    40%
                  </div>
                  <div className="mb-2 text-xl text-black">
                    PODs <span className="text-gray-400">are unreliable</span>
                  </div>
                  <motion.p 
                    className="max-w-md text-base text-accent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    Detect vertical movement with proof of how drivers move inside.
                  </motion.p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-col">
                  {features.map((feature, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={clsx(
                        "flex items-start gap-2 py-4 text-left transition-all duration-300 cursor-pointer"
                      )}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={clsx(
                        "mt-1 transition-colors duration-300",
                        activeTab === index ? 'text-primary' : 'text-accent'
                      )}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={clsx(
                          "mb-1 text-base font-normal transition-colors duration-300",
                          activeTab === index ? "text-primary font-medium" : "text-accent"
                        )}>
                          {feature.title}
                        </h3>
                        {activeTab === index && (
                          <motion.p 
                            className="text-sm text-accent"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right side - Dynamic content based on active tab */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image 
                  src={features[activeTab].image} 
                  alt={features[activeTab].title} 
                  width={642} 
                  height={750} 
                  className="object-contain" 
                />
              </motion.div>
            </div>
        </motion.div>
      </Container>
    </>
  );
}
