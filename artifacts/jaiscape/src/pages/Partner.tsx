import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  Star, Globe, Instagram, TrendingUp, Gem, Camera, MapPin,
  Phone, Mail, MessageCircle, Handshake, Check
} from "lucide-react";
import aboutHero from "@/assets/images/about-hero.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  ownerName: z.string().min(2, "Owner name is required"),
  businessType: z.string().min(1, "Please select a business type"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(2, "Location is required"),
  description: z.string().min(20, "Please write at least 20 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: Star,
    title: "Featured Listings",
    desc: "Your business gets a premium featured card on Jaiscape, seen by every traveler who visits — positioned above standard search results.",
  },
  {
    icon: Instagram,
    title: "Instagram Promotion",
    desc: "Cinematic content of your property shared across Jaiscape's Instagram with full credit — reaching thousands of travel enthusiasts.",
  },
  {
    icon: Globe,
    title: "Global Tourist Reach",
    desc: "Jaiscape is visited by travelers from India, Europe, US, and Southeast Asia. Your listing gets in front of the right audience.",
  },
  {
    icon: TrendingUp,
    title: "Travel Discovery Exposure",
    desc: "We actively recommend partner businesses in our AI-generated itineraries — putting your camp, café, or hotel in every suggested trip plan.",
  },
  {
    icon: Gem,
    title: "Premium Branding",
    desc: "Your business is positioned as a luxury, curated experience — not a generic listing. Our aesthetic elevates how travelers perceive you.",
  },
  {
    icon: Camera,
    title: "Cinematic Collaboration",
    desc: "We partner with photographers and creators to produce high-quality visual content for your property — at no extra cost to partners.",
  },
];

const businessTypes = [
  "Desert Camp",
  "Hotel",
  "Cafe",
  "Restaurant",
  "Shop",
  "Safari Provider",
  "Photography Experience",
  "Other",
];

export default function Partner() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      businessType: "",
      phone: "",
      email: "",
      location: "",
      description: "",
    },
  });

  function onSubmit(_values: FormValues) {
    toast({
      title: "Partnership Request Sent!",
      description: "We'll review your details and get back to you within 24–48 hours.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-[#0B0B0B]">
        {/* Hero */}
        <div className="relative h-[55vh] w-full overflow-hidden flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/30" />
          <div className="relative z-10 container mx-auto px-6 pb-16">
            <div className="inline-flex items-center gap-2 border border-[#C8A96B]/30 px-3 py-1 text-xs text-[#C8A96B] uppercase tracking-widest mb-5">
              <Handshake size={11} /> For Local Businesses
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl text-white leading-none"
            >
              Partner With Jaiscape
            </motion.h1>
          </div>
        </div>

        {/* Intro */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug">
                Showcase Your Business to Travelers Worldwide
              </h2>
              <div className="w-16 h-px bg-[#C8A96B] mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Jaiscape helps travelers discover the most authentic and premium experiences in Jaisalmer. We collaborate with desert camps, cafes, hotels, restaurants, safari providers, and local artisans — curating them into beautiful, trusted listings that travelers actually use when planning their trips.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                If you run a camp, café, hotel, or any experience in Jaisalmer and want to reach more travelers, we'd love to feature you. Partnering with Jaiscape means your business becomes part of a premium discovery platform — not just a link in a list.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: "10K+", label: "Monthly Visitors" },
                { value: "50+", label: "Curated Listings" },
                { value: "15+", label: "Cities of Origin" },
                { value: "4.9★", label: "Partner Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-[#C8A96B]/20 p-6 bg-[#151515]"
                >
                  <p className="font-serif text-4xl text-[#C8A96B] mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 border-b border-border bg-[#151515]">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">What You Get</h2>
              <div className="w-16 h-px bg-[#C8A96B]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, borderColor: "rgba(200,169,107,0.4)" }}
                    className="border border-border p-8 bg-[#0B0B0B] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#C8A96B]/10 transition-colors">
                      <Icon size={20} className="text-[#C8A96B]" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Who We Work With</h2>
              <div className="w-16 h-px bg-[#C8A96B]" />
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Desert Camps", "Luxury Hotels", "Rooftop Cafes", "Restaurants",
                "Safari Providers", "Local Artisans", "Photography Tours",
                "Camel Ride Operators", "Heritage Havelis", "Spa & Wellness"
              ].map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 border border-[#C8A96B]/20 px-5 py-3 bg-[#151515]"
                >
                  <Check size={12} className="text-[#C8A96B]" />
                  <span className="text-sm text-foreground/80">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact + Form */}
        <section className="py-24 bg-[#151515]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              {/* Contact Cards */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-serif text-4xl text-foreground mb-4">Get In Touch</h2>
                  <div className="w-16 h-px bg-[#C8A96B] mb-8" />
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    Ready to get your business featured on Jaiscape? Fill out the form or reach us directly — we'll respond within 24 hours.
                  </p>
                </div>

                {/* Phone */}
                <div className="border border-border bg-[#0B0B0B] p-6 hover:border-[#C8A96B]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 border border-[#C8A96B]/30 flex items-center justify-center">
                      <Phone size={14} className="text-[#C8A96B]" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-[#C8A96B]">Phone</p>
                      <p className="text-foreground text-sm mt-0.5">+91 6350577731</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+916350577731" className="flex-1">
                      <Button className="w-full bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none text-sm h-10">
                        Call Now
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/916350577731?text=Hi%2C%20I%20want%20to%20partner%20with%20Jaiscape"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black rounded-none text-sm h-10"
                      >
                        <MessageCircle size={14} className="mr-1.5" /> WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="border border-border bg-[#0B0B0B] p-6 hover:border-[#C8A96B]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 border border-[#C8A96B]/30 flex items-center justify-center">
                      <Mail size={14} className="text-[#C8A96B]" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-[#C8A96B]">Email</p>
                      <p className="text-foreground text-sm mt-0.5">hellojaiscape@gmail.com</p>
                    </div>
                  </div>
                  <a href="mailto:hellojaiscape@gmail.com?subject=Partnership%20Inquiry">
                    <Button
                      variant="outline"
                      className="w-full border-border hover:border-[#C8A96B] hover:text-[#C8A96B] rounded-none text-sm h-10 bg-transparent"
                    >
                      <Mail size={14} className="mr-1.5" /> Send Email
                    </Button>
                  </a>
                </div>

                {/* Location */}
                <div className="border border-border bg-[#0B0B0B] p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#C8A96B]/30 flex items-center justify-center">
                      <MapPin size={14} className="text-[#C8A96B]" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-[#C8A96B]">Based In</p>
                      <p className="text-foreground text-sm mt-0.5">Jaisalmer, Rajasthan, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-3 bg-[#0B0B0B] border border-border p-8 md:p-12">
                <h3 className="font-serif text-2xl text-foreground mb-2">Business Inquiry</h3>
                <p className="text-muted-foreground text-sm mb-8">Fill in your details and we'll reach out with partnership options.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="businessName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Desert Rose Camp" {...field}
                              className="bg-transparent border-0 border-b border-border rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-[#C8A96B] placeholder:text-muted-foreground/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="ownerName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Owner Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field}
                              className="bg-transparent border-0 border-b border-border rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-[#C8A96B] placeholder:text-muted-foreground/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="businessType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Business Type</FormLabel>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {businessTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => field.onChange(type)}
                              className={`px-3 py-1.5 border text-xs transition-colors ${
                                field.value === type
                                  ? "border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10"
                                  : "border-border text-muted-foreground hover:border-[#C8A96B]/40"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXX XXXXX" {...field}
                              className="bg-transparent border-0 border-b border-border rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-[#C8A96B] placeholder:text-muted-foreground/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field}
                              className="bg-transparent border-0 border-b border-border rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-[#C8A96B] placeholder:text-muted-foreground/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Near Sam Dunes, Jaisalmer" {...field}
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-[#C8A96B] placeholder:text-muted-foreground/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="description" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/70 uppercase tracking-widest text-xs">Short Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your business, what makes it special..."
                            {...field}
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 min-h-[100px] focus-visible:ring-0 focus-visible:border-[#C8A96B] resize-none placeholder:text-muted-foreground/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button
                      type="submit"
                      className="w-full h-14 bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none text-base font-medium"
                    >
                      Request Partnership
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
