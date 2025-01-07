"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What programs do you offer?",
    answer:
      "We offer a variety of programs including professional development, language and cultural integration, entrepreneurship training, and mentorship opportunities. Each program is designed to meet the specific needs of immigrant women in their journey to success.",
  },
  {
    question: "How can I join a program?",
    answer:
      "Joining our programs is easy! You can start by browsing our available programs and filling out the registration form. Our team will then contact you to discuss your goals and find the best program match for you.",
  },
  {
    question: "Are the programs free?",
    answer:
      "Many of our programs are offered free of charge, thanks to our generous donors and partners. Some specialized programs may have a nominal fee, but we offer scholarships and financial assistance to ensure accessibility for all.",
  },
  {
    question: "Can I volunteer or become a mentor?",
    answer:
      "Yes! We welcome volunteers and mentors who want to make a difference. Visit our Volunteer page to learn about current opportunities and submit your application.",
  },
  {
    question: "Do you offer online programs?",
    answer:
      "Yes, we offer both in-person and online programs to accommodate different schedules and preferences. Our online programs provide the same quality of support and resources as our in-person programs.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-secondary/5 py-20">
      <div className="container px-4 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our programs and services
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
