"use client";

import { motion } from "framer-motion";
import { Button, Container, SectionHeader } from "./shared";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function Integration() {
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
          <button className="text-accent uppercase">Integration</button>
          <button className="text-black uppercase">Frameworks</button>
          <button className="text-accent uppercase">Touchpoints</button>
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

      {/* Framework Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {frameworks.map((framework, index) => (
          <motion.div
            key={framework.name}
            className={clsx(
              "border-medium-gray flex min-h-[400px] flex-col items-start justify-between gap-4 border-y p-4",
              (index === 0 || index == 2) && "border-r-medium-gray border-r",
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
          >
            <Image
              src={framework.icon}
              width={120}
              height={120}
              alt={framework.name}
              className="size-[120px]"
            />
            <div className="text-accent font-medium">
              {framework.text}{" "}
              <span className="inline-flex items-center text-black">
                in less than 1 hour
                <ChevronRight className="size-4" />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
