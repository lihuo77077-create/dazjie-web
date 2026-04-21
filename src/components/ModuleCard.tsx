import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const ModuleCard = ({ number, title, description, icon: Icon, delay = 0, className = "" }: ModuleCardProps & { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.1,
        y: -10,
        boxShadow: "0 40px 80px rgba(0, 0, 0, 0.08)",
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut",
        delay 
      }}
      className={`group relative bg-white p-6 md:p-8 rounded-[40px] border border-[#E0E0E0] hover:border-brand-pink/20 transition-colors duration-300 cursor-pointer flex flex-col min-h-[140px] md:min-h-[180px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] ${className}`}
    >
      {/* Huge Background Number */}
      <span className="absolute -top-4 -left-2 text-[80px] font-black text-black/[0.04] select-none pointer-events-none leading-none z-0 transition-colors pointer-events-none overflow-hidden h-full w-full rounded-[40px]">
        {number}
      </span>

      <div className="relative z-10 flex flex-col justify-center h-full">
        <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center text-white mb-4 md:mb-6 transition-all duration-300 shrink-0">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-ink-dark mb-2 md:mb-3 tracking-tight leading-snug transition-colors duration-300 whitespace-nowrap md:whitespace-normal">{title}</h3>
          <p className="text-[13px] md:text-[14px] text-ink-muted leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
