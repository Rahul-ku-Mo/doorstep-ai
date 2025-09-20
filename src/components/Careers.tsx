"use client";

import { motion } from "framer-motion";
import { Button } from "./shared";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const jobListings = [
  {
    id: 1,
    department: "Sales",
    role: "Sales Account Executive",
    location: "San Francisco, CA",
    salary: "$200K - $300K",
  },
  {
    id: 2,
    department: "Engineering",
    role: "Senior Software Engineer",
    location: "New York, NY",
    salary: "$180K - $250K",
  },
  {
    id: 3,
    department: "Product",
    role: "Product Manager",
    location: "Remote",
    salary: "$150K - $200K",
  },
];

export default function Careers() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="border-x-medium-gray mx-auto w-full max-w-[1152px] border-x px-4 py-16 pt-24 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Tag */}
          <motion.div
            className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="bg-primary size-2"></div>
            <span className="font-geist-mono text-sm text-[#666666]/60 uppercase">
              WE&apos;RE HIRING
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-primary md:text-4.5xl text-3xl font-normal sm:text-4xl lg:max-w-2xl">
            Doorstep.ai Careers
          </h1>

          {/* Description */}
          <div className="text-accent max-w-5xl space-y-4 text-base font-medium sm:text-lg">
            <p>
              Doorstep.ai is building the first predictive delivery intelligence
              platform for logistics and e-commerce, aiming for reliability,
              trust, and efficiency in last-mile operations.
            </p>
            <p>
              Our platform predicts and prevents delivery failures, ensuring
              packages reach the right destination on time with complete
              visibility.
            </p>
            <p>
              We&apos;re trusted by operations leaders, delivery managers, fraud
              prevention teams, couriers, and customer experience specialists to
              reduce disputes, minimize fraud, and improve satisfaction.
            </p>
            <p>
              <span className="font-medium">
                Backed by leading investors and operators in AI, logistics, and
                enterprise software
              </span>
              , we&apos;re well-capitalized and scaling globally.
            </p>
            <p>
              We&apos;re now expanding our team with high-impact roles listed
              below.
            </p>
          </div>

          {/* Application Instructions */}
          <div>
            <p className="text-accent text-base font-medium sm:text-lg">
              To apply, email{" "}
              <a
                href="mailto:recruiting@doorstep.ai"
                className="text-primary hover:underline"
              >
                recruiting@doorstep.ai
              </a>{" "}
              with the subject line of the role you&apos;re interested in, along
              with your LinkedIn profile and a short introduction about your
              fit.
            </p>
            <p className="text-accent mt-2 text-base sm:text-lg">
              We&apos;re excited to hear from you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Job Listings Section */}
      <section className="border-x-medium-gray mx-auto w-full max-w-[1152px] border-x px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {jobListings.map((job, index) => (
            <div
              key={job.id}
              className={`border-medium-gray flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between ${
                index < jobListings.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Mobile Layout */}
              <div className="flex flex-col gap-3 sm:hidden">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-accent text-xs font-medium uppercase">
                      {job.department}
                    </span>
                    <h3 className="text-lg font-medium text-black">
                      {job.role}
                    </h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit"
                    icon={<ArrowUpRight className="size-3" />}
                    iconPosition="right"
                  >
                    Apply
                  </Button>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-accent text-sm">{job.location}</span>
                  <span className="text-sm font-medium text-black">
                    {job.salary}
                  </span>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden flex-1 flex-col justify-between gap-2 sm:flex sm:flex-row sm:items-center sm:gap-8">
                <div className="flex items-center gap-8 lg:gap-12">
                  <span className="text-accent w-20 text-sm font-medium uppercase lg:w-24">
                    {job.department}
                  </span>
                  <h3 className="flex-1 text-lg font-medium text-black">
                    {job.role}
                  </h3>
                </div>
                <div className="flex items-center gap-8 lg:gap-12">
                  <span className="text-accent w-32 text-sm lg:w-40">
                    {job.location}
                  </span>
                  <span className="w-24 text-sm font-medium text-black lg:w-32">
                    {job.salary}
                  </span>
                  <Button
                    variant="outline"
                    className="w-fit"
                    icon={<ArrowUpRight className="size-4" />}
                    iconPosition="right"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}

      <section className="border-y-medium-gray mx-auto max-w-[1152px] border-y">
        <Image
          src="/top.svg"
          width={1152}
          height={101}
          alt="top"
          className="mx-auto"
        />
        <motion.div
          className="border-x-medium-gray relative overflow-hidden rounded-lg border-x bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-normal text-black sm:text-2xl lg:text-3xl">
                Join us at Doorstep.ai and help shape the future of{" "}
                <span className="text-primary">
                  predictive delivery intelligence
                </span>
                .
              </h2>
            </div>
            <div className="flex w-full gap-3 sm:w-auto">
              <Button variant="default" className="w-fit">
                Visit Docs
              </Button>
              <Button variant="outline" className="w-fit">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </motion.div>
        <Image
          src="/top.svg"
          width={1152}
          height={101}
          alt="top"
          className="mx-auto"
        />
      </section>
    </div>
  );
}
