import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative mb-8">
           <span className="text-9xl font-black text-muted select-none">404</span>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
           </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Lost in the Orchard?</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
          The branch you're looking for doesn't exist or has been pruned.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to="/">
             <Button className="rounded-full px-8 h-12 shadow-lg shadow-primary/20">
               <Home className="mr-2 h-4 w-4" />
               Back to Home
             </Button>
           </Link>
           <Button variant="outline" className="rounded-full px-8 h-12" onClick={() => window.history.back()}>
             <ArrowLeft className="mr-2 h-4 w-4" />
             Go Back
           </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
