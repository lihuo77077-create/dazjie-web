import { motion } from 'motion/react';

export const ChatStack = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Floating Badge as seen in Screenshots */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 top-1/4 z-30"
      >
        <div className="bg-brand-pink text-white px-5 py-3 rounded-full font-black text-sm shadow-2xl shadow-brand-pink/30 flex flex-col items-center leading-none">
          <span className="text-lg">+5K</span>
          <span className="text-[8px] mt-1 opacity-80 uppercase tracking-widest">好评如潮</span>
        </div>
      </motion.div>

      {/* Main Chat Box - Glassmorphism Elite Style */}
      <div className="bg-white/40 backdrop-blur-3xl rounded-[50px] border border-white/60 shadow-2xl shadow-zinc-200/40 p-8 pt-12 pb-10 flex flex-col gap-5 relative overflow-hidden group">
        <div className="flex items-center gap-3 mb-6 px-1">
          <div className="w-9 h-9 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink text-[10px] font-black border border-brand-pink/10">导师</div>
          <div className="flex flex-col">
            <span className="text-[11px] font-black text-zinc-900 tracking-tight">大咖交流群 (1240)</span>
            <div className="flex items-center gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
               <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Active Now</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="bg-zinc-50/90 backdrop-blur-sm text-[12px] font-medium text-zinc-600 px-5 py-4 rounded-3xl rounded-tl-none border border-zinc-100/50 shadow-sm leading-relaxed">
               老师，这个案例的逻辑真的很清晰！
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-end"
          >
            <div className="bg-brand-pink text-white text-[12px] font-bold px-7 py-4 rounded-3xl rounded-tr-none shadow-xl shadow-brand-pink/30 leading-relaxed">
               很有兴对你有启发，继续加油！
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="bg-zinc-50/90 backdrop-blur-sm text-[12px] font-medium text-zinc-600 px-5 py-4 rounded-3xl rounded-tl-none border border-zinc-100/50 shadow-sm leading-relaxed">
               好的老师我一定会加油的
            </div>
          </motion.div>
        </div>

        {/* Input Simulation Area - Exactly matching Screenshot 1 */}
        <div className="mt-10 pt-8 border-t border-zinc-100/80 flex items-center justify-between">
           <div className="flex-1 flex gap-2">
              <div className="h-2 w-24 bg-zinc-100 rounded-full" />
              <div className="h-2 w-12 bg-brand-pink/5 rounded-full" />
           </div>
           <div className="w-10 h-10 rounded-full bg-brand-pink/5 border border-brand-pink/10 flex items-center justify-center text-brand-pink transition-all hover:bg-brand-pink hover:text-white cursor-pointer group-hover:scale-110">
              <div className="rotate-[-10deg]">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
