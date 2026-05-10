import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "We will get back to you shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-[#151515] min-h-screen pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Info */}
            <div>
              <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">Let's Talk</h1>
              <div className="w-24 h-px bg-[#C8A96B] mb-12" />
              <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
                Whether you're planning a bespoke desert experience or seeking access to our hidden gems, we are here to craft your perfect journey.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm tracking-widest uppercase text-[#C8A96B] mb-2">Email</h4>
                  <p className="text-lg text-foreground">hello@jaiscape.com</p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest uppercase text-[#C8A96B] mb-2">Phone</h4>
                  <p className="text-lg text-foreground">+91 98765 43210</p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest uppercase text-[#C8A96B] mb-2">Location</h4>
                  <p className="text-lg text-foreground leading-relaxed">
                    Fort Road, Jaisalmer,<br/>
                    Rajasthan 345001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#0B0B0B] p-8 md:p-12 border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 uppercase tracking-widest text-xs">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-[#C8A96B] text-lg placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 uppercase tracking-widest text-xs">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Email address" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-[#C8A96B] text-lg placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 uppercase tracking-widest text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 min-h-[120px] focus-visible:ring-0 focus-visible:border-[#C8A96B] text-lg resize-none placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 h-14 text-lg rounded-none mt-4" data-testid="submit-contact">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
