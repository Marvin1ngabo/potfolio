import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full radial-glow" />
      </div>

      {/* Dot accent */}
      <div className="absolute left-[48%] top-[58%] w-2 h-2 rounded-full bg-accent" />

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <div className="space-y-6">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-28 h-28 rounded-full overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/10"
          >
            <img src={profileImg} alt="Rutaro Ngabonziza Didace" className="w-full h-full object-cover" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-sm tracking-widest uppercase font-body"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display leading-[1.15]"
          >
            <span className="text-gradient">RUTARO</span>{" "}
            <span className="text-gradient">NGABONZIZA</span>
            <br />
            <span className="text-foreground/50 text-2xl md:text-3xl font-light">Didace</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors group"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-md"
        >
          <p>
            Software Engineer & Full-Stack Developer. I build modern web applications
            with clean, scalable architectures.
          </p>
          <p>
            I work with React, Node.js, JavaScript, TypeScript, Java (Spring Boot),
            Python, Next.js, PostgreSQL, MongoDB, Docker, and more. I'm passionate about
            crafting elegant solutions and shipping great products.
          </p>
        </motion.div>
      </div>

      <ContactForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
};

export default HeroSection;
