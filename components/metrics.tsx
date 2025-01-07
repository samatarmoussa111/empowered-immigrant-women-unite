"use client";

import { motion } from "framer-motion";
import { Heart, Users, Zap } from "lucide-react";

const metrics = [
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    value: "500+",
    label: "Women Supported",
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    value: "50+",
    label: "Active Programs",
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    value: "100+",
    label: "Volunteer Mentors",
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

export function MetricsSection() {
  return (
    <section className="bg-secondary/10 py-20">
      <div className="container px-4 sm:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center gap-4 text-center"
            >
              {metric.icon}
              <h3 className="text-4xl font-bold">{metric.value}</h3>
              <p className="text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
