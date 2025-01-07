"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OverviewSection() {
  return (
    <section className="bg-secondary/10 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container px-4 sm:px-16 grid gap-8 md:grid-cols-2 md:items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering Through Unity
          </h2>
          <p className="text-lg text-muted-foreground">
            We are dedicated to supporting immigrant women in their journey to
            build successful lives in their new home. Through education,
            resources, and community support, we help women achieve their full
            potential.
          </p>
          <Button asChild>
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative aspect-square overflow-hidden rounded-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2070"
            alt="Women in a workshop"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
