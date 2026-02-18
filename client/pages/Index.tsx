import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ArrowRight, 
  Code2, 
  Lightbulb, 
  Cpu, 
  Settings, 
  Zap, 
  CheckCircle2, 
  Users, 
  BarChart3,
  Bot
} from "lucide-react";

const services = [
  {
    title: "Tech Consulting",
    description: "Expert guidance for digital agencies to optimize their tech stacks and infrastructure.",
    icon: Lightbulb,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Custom Development",
    description: "Bespoke software solutions, web applications, and internal tools built with cutting-edge tech.",
    icon: Code2,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Workflow Automation",
    description: "Steamline operations with AI-powered automations and custom integrations.",
    icon: Bot,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Agency Support",
    description: "Reliable white-label development and technical support for your client projects.",
    icon: Users,
    color: "bg-orange-500/10 text-orange-600",
  },
];

const expertise = [
  "React & Next.js",
  "Node.js Backend",
  "Cloud Infrastructure",
  "API Design",
  "CI/CD Pipelines",
  "AI Integration",
  "Database Optimization",
  "Legacy Refactoring"
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="h-3 w-3 fill-current" />
                Modernizing Digital Agencies
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Building the <span className="text-primary">Digital Roots</span> of Future Agencies
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                Orchard Tech provides high-end consulting, bespoke development, and smart automation to help digital agencies scale with precision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                  View Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Solutions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We specialize in the technical backbone of digital agencies, allowing you to focus on your creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-background border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className={`h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Technical Excellence in Every <span className="text-primary text-italic">Branch</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our team consists of senior engineers and architects who understand the unique challenges faced by digital agencies. We don't just write code; we build scalable foundations.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-emerald-800 overflow-hidden flex items-center justify-center p-1">
                <div className="w-full h-full bg-background rounded-[calc(1.5rem-2px)] p-8 flex flex-col justify-center">
                   {/* Abstract Tech Graphic */}
                   <div className="grid grid-cols-3 gap-4 h-full">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={i % 2 === 0 ? "bg-primary/10 rounded-2xl animate-pulse" : "bg-muted rounded-2xl"} style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                   </div>
                </div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-2xl border flex items-center gap-4 animate-bounce-slow">
                 <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="text-primary h-6 w-6" />
                 </div>
                 <div>
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Efficiency Boost</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-muted/30">
        <div className="container">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cultivation Process</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We follow a structured approach to ensure every digital seed grows into a robust technical asset.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connector lines (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
              
              {[
                { step: "01", title: "Discovery", desc: "We analyze your current workflow and identify technical gaps." },
                { step: "02", title: "Deployment", desc: "We build and integrate custom solutions into your agency operations." },
                { step: "03", title: "Growth", desc: "We provide ongoing support and scaling strategies for long-term success." }
              ].map((item, i) => (
                <div key={item.step} className="bg-background p-8 rounded-3xl border relative">
                  <div className="absolute -top-6 left-8 h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to grow your technical capacity?</h2>
              <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
                Join the network of agencies scaling their operations with Orchard Tech.
              </p>
              <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-full font-bold group">
                Contact Our Experts
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
