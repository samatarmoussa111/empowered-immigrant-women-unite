"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "This program changed my life. I found a community that understands and supports me, and I've grown .",
    author: "Sarah Chen",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000",
  },
  {
    quote:
      "The entrepreneurship program gave me the confidence and skills to start my own business. I'm now a proud business owner!",
    author: "Maria Rodriguez",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
  },
  {
    quote:
      "The language and cultural programs helped me feel at home in my new country. I've made lifelong friends here.",
    author: "Aisha Patel",
    role: "Healthcare Professional",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from the women who have transformed their lives through our
            programs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 w-full sm:basis-[calc(100%-1rem)] md:basis-[calc(50%-1rem)]"
                >
                  <Card className="border-none bg-secondary/5">
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-4">
                        <Quote className="h-8 w-8 text-primary opacity-50" />
                        <p className="text-base md:text-lg min-h-[4.5rem] md:min-h-[4rem]">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                          <div className="relative h-10 w-10 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm md:text-base">
                              {testimonial.author}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </motion.div>

        {/* Mobile Indicators */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-primary/20"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
