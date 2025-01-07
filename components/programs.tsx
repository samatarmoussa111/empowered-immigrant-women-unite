"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Leadership Development (Bilicsan)",
    description:
      "We provide leadership workshops and mentorship opportunities to enhance the leadership skills of Somali immigrant women, empowering them to take on influential roles within their communities and beyond.",
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1770",
  },
  {
    title: "Health and Wellness (Iftin)",
    description:
      "Through health education and accessible resources, we equip immigrants with the knowledge and tools to prioritize their well-being, enabling them to make informed decisions about their health.",
    image:
      "https://plus.unsplash.com/premium_photo-1664299939320-3b3ca58141df?w=1770&auto=format&fit=crop&q=80",
  },
  {
    title: "Education & Jobs",
    description:
      "Our educational programs offer immigrants access to quality learning opportunities, empowering them to reach their full potential and make valuable contributions to society. Additionally, we support employment through skills training and job placement services, helping immigrants succeed in the workforce.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1770",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProgramsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Programs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover how we support and empower immigrant women through our
            specialized programs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-secondary/5"
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {program.description}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  className="group/btn w-full border border-secondary/20 bg-white/90 backdrop-blur hover:bg-white"
                  asChild
                >
                  <Link
                    href={`/programs/${program.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <Button size="lg" className="group" asChild>
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
