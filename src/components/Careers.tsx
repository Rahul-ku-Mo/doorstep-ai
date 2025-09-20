"use client";

import { motion } from "framer-motion";
import { Button } from "./shared";
import { ArrowUpRight } from "lucide-react";

const jobListings = [
  {
    id: 1,
    department: "Sales",
    role: "Sales Account Executive",
    location: "San Francisco, CA",
    salary: "$200K - $300K"
  },
  {
    id: 2,
    department: "Engineering",
    role: "Senior Software Engineer",
    location: "New York, NY",
    salary: "$180K - $250K"
  },
  {
    id: 3,
    department: "Product",
    role: "Product Manager",
    location: "Remote",
    salary: "$150K - $200K"
  }
];

export default function Careers() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="border-x-medium-gray mx-auto w-full max-w-[1152px] border-x px-4 py-16 sm:px-6 lg:px-8 ">
        <motion.div
          className="flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Tag */}
          <div className="flex items-center gap-2">
            <div className="bg-primary size-2"></div>
            <span className="text-sm text-[#666666]/60 font-geist-mono uppercase">
              WE&apos;RE HIRING
            </span>
          </div>

          {/* Title */}
          <h1 className="text-primary sm:text-4.5xl text-3xl font-normal sm:max-w-2xl">
            Doorstep.ai Careers
          </h1>

          {/* Description */}
          <div className="max-w-4xl space-y-4 text-base text-black sm:text-lg">
            <p>
              Doorstep.ai is building the first predictive delivery intelligence platform 
              for logistics and e-commerce, aiming for reliability, trust, and efficiency 
              in last-mile operations.
            </p>
            <p>
              Our platform predicts and prevents delivery failures, ensuring packages reach 
              the right destination on time with complete visibility.
            </p>
            <p>
              We're trusted by operations leaders, delivery managers, fraud prevention teams, 
              couriers, and customer experience specialists to reduce disputes, minimize fraud, 
              and improve satisfaction.
            </p>
            <p>
              <span className="font-medium">Backed by leading investors and operators in AI, 
              logistics, and enterprise software</span>, we're well-capitalized and scaling globally.
            </p>
            <p>
              We're now expanding our team with high-impact roles listed below.
            </p>
          </div>

          {/* Application Instructions */}
          <div className="mt-8 rounded-lg bg-gray-50 p-6">
            <p className="text-base text-black">
              To apply, email{" "}
              <a 
                href="mailto:recruiting@doorstep.ai" 
                className="text-primary hover:underline"
              >
                recruiting@doorstep.ai
              </a>{" "}
              with the subject line of the role you're interested in, along with your LinkedIn 
              profile and a short introduction about your fit.
            </p>
            <p className="mt-2 text-base text-black">
              We're excited to hear from you.
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
              className={`flex flex-col gap-4 border-medium-gray py-6 sm:flex-row sm:items-center sm:justify-between ${
                index < jobListings.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8 justify-between flex-1">
                <span className="text-sm font-medium text-accent uppercase w-full max-w-52">
                  {job.department}
                </span>
                <h3 className="text-2xl font-medium text-black grow text-left">
                  {job.role}
                </h3>
                <span className="text-sm text-accent w-full max-w-52">
                  {job.location}
                </span>
                <span className="text-lg font-medium text-accent">
                  {job.salary}
                </span>
              </div>
              <Button
                variant="outline"
                className="w-fit"
                icon={<ArrowUpRight className="size-4" />}
                iconPosition="right"
              >
                Apply now
              </Button>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="border-x-medium-gray mx-auto w-full max-w-[1152px] border-x px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12"
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
              <h2 className="text-2xl font-normal text-black sm:text-3xl">
                Join us at Doorstep.ai and help shape the future of{" "}
                <span className="text-primary">predictive delivery intelligence</span>.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="default" className="w-fit">
                Visit Docs
              </Button>
              <Button variant="outline" className="w-fit">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
