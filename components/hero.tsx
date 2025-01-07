"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070"
          alt="Diverse group of women in professional setting"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container px-4 sm:px-16 relative space-y-8 text-center text-white"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          Uniting to Empower Immigrant{" "}
          <span className="text-primary"> Women!</span>
        </h1>
        <p className="mx-auto max-w-sm text-lg sm:text-xl drop-shadow-lg">
          Support, Resources, and Programs to help women thrive.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="rounded-full font-semibold"
            asChild
          >
            <Link href="/programs">Explore Programs</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full bg-white/10 font-semibold backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
