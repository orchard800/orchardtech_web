import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="container pt-40 pb-20 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
           <span className="text-4xl font-bold text-primary">O</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Orchard Tech</h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          This page is currently under construction. We are busy cultivating the story of Orchard Tech. Check back soon for more information about our team, mission, and history.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="outline" className="rounded-full px-8 h-12">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button className="rounded-full px-8 h-12">
            Contact Support
          </Button>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          Want to see this page finished? Continue prompting the assistant to build it out!
        </p>
      </motion.div>
    </div>
  );
}
