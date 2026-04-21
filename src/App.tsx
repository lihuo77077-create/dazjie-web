import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Workflow, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  UserRoundCheck,
  ArrowLeft
} from 'lucide-react';
import { HandDrawnUnderline } from './components/HandDrawnUnderline';
import { ModuleCard } from './components/ModuleCard';
import { ChatStack } from './components/ChatStack';

const LandingPage = () => (
  <div className="min-h-screen bg-white relative selection:bg-brand-pink/40 selection:text-white overflow-hidden">
    {/* Global Background Texture from Geometric Balance Theme */}
    <div className="bg-texture" />

    {/* Section 1: Geometric Balance Integrated Layout */}
    <section className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-[40px] px-8 lg:px-[60px] py-[60px] items-center max-w-[1440px] mx-auto overflow-visible">
      {/* Integrated Navigation in Section 1 */}
      <div className="absolute top-12 left-0 w-full px-8 lg:px-[60px] flex justify-between items-center pointer-events-auto pr-16 lg:pr-[100px]">
        <div className="flex flex-col">
          <span className="text-[12px] font-bold tracking-[2px] text-brand-pink uppercase">OFFICIAL 大Z姐·DY.ELITE</span>
          <span className="font-display font-[800] text-2xl tracking-tighter leading-none mt-1">BIG.Z.SYS</span>
        </div>
        <div className="hidden md:flex gap-8 lg:gap-12 text-[11px] font-bold uppercase tracking-[2px] text-zinc-400">
          <a href="#content" className="hover:text-zinc-950 transition-colors">交付体系</a>
          <Link to="/cases" className="hover:text-zinc-950 transition-colors">关于我们</Link>
          <a href="#price" className="text-zinc-950 border-b-2 border-brand-pink pb-1">咨询合作</a>
        </div>
      </div>

      <div className="lg:col-span-1 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[14px] font-bold text-brand-pink uppercase tracking-[2px] mb-8">大Z姐 | 抖音变现全案</div>
          
          <div className="relative mb-12 flex flex-col gap-8 md:gap-4 lg:items-start items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="relative z-30"
            >
              <h1 className="text-[44px] sm:text-6xl md:text-[90px] lg:text-[110px] xl:text-[140px] font-display font-[800] tracking-[-0.04em] text-zinc-950 leading-[1] mb-2 md:mb-0 lg:ml-[-5%] overflow-visible whitespace-nowrap">
                大Z姐
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 450, damping: 25, delay: 0.1 }}
              className="relative z-20 lg:ml-[12%]"
            >
              <h1 className="text-[44px] sm:text-6xl md:text-[90px] lg:text-[110px] xl:text-[140px] font-display font-[800] tracking-[-0.04em] text-zinc-950 leading-[1] mb-2 md:mb-0 pink-underline whitespace-nowrap">
                抖音变现
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 450, damping: 25, delay: 0.2 }}
              className="relative z-10 lg:ml-2"
            >
              <h1 className="text-[44px] sm:text-6xl md:text-[90px] lg:text-[110px] xl:text-[140px] font-display font-[800] tracking-[-0.04em] text-zinc-900 leading-[1] whitespace-nowrap">
                全案
                <span className="inline-block w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-brand-pink rounded-full ml-4 animate-bounce align-middle" />
              </h1>
            </motion.div>
          </div>

          <p className="text-lg text-ink-muted max-w-[400px] font-medium mb-12 leading-relaxed">
            拒绝无效自嗨，一切动作以【转化】为导向。为您构建“精准定位+商业闭环”的增长体系。
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
            <button className="cta-gradient text-white px-14 py-5 rounded-full font-bold text-[18px] shadow-[0_10px_25px_rgba(255,182,193,0.4)] hover:scale-105 transition-all cursor-pointer">
              深度诊断业务
            </button>
            <div className="flex gap-6 text-[13px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
              <span>● 精准定位</span>
              <span>● 商业闭环</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Grid & Stack */}
      <div className="relative flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
          <ModuleCard number="01" icon={UserRoundCheck} title="实体老板/小白" description="从零到一建立短视频思维，摆脱局外人身份。" />
          <ModuleCard number="02" icon={Workflow} title="瓶颈期创作者" description="解决流量玄学、涨粉不现问题，打通变现路径。" delay={0.1} />
          <ModuleCard number="03" icon={BarChart3} title="甩手掌柜型" description="由于没时间拍或没团队，提供全托管式内容交付。" delay={0.2} />
          <ModuleCard number="04" icon={Rocket} title="迷失型转型者" description="针对流量下滑、变现困难的账号进行深度激活。" delay={0.3} />
        </div>
        
        <div className="relative h-[220px] flex items-center justify-center mt-10 md:-mt-10 lg:mt-0">
           <ChatStack />
        </div>
      </div>
    </section>

    {/* Section 2: Audience & Pain Points */}
    <section className="relative z-10 min-h-screen bg-white flex flex-col justify-center px-8 lg:px-[60px] py-[60px] border-y border-border-subtle overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div>
          <div className="text-[14px] font-bold text-brand-pink uppercase tracking-[2px] mb-6">Audience Analysis</div>
          <h2 className="text-5xl md:text-[64px] font-display font-[800] tracking-[-0.04em] leading-[1.1] mb-10">
            痛点直击与 <br />
            <span className="pink-underline">人群画像</span>
          </h2>
          <p className="text-ink-muted font-medium text-lg max-w-[420px] leading-relaxed mb-12">
            破局的核心：不是盲目发视频，而是“精准定位+商业闭环”，让每一条内容都承载变现价值。
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-16">
            <div className="p-1 px-5 border-l-4 border-brand-pink/40">
               <div className="text-2xl font-[800]">拒绝无效</div>
               <div className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest mt-1">Efficiency First</div>
            </div>
            <div className="p-1 px-5 border-l-4 border-brand-pink/40">
               <div className="text-2xl font-[800]">极致变现</div>
               <div className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest mt-1">ROI Focused</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative group">
          <ModuleCard number="01" icon={Workflow} title="深度定位" description="彻底打通账号逻辑，解决起号没方向的迷茫。" />
          <ModuleCard number="02" icon={Rocket} title="高效交付" description="标准化流程，让短视频生产从重资产变轻资产。" delay={0.1} />
          <ModuleCard number="03" icon={Users} title="实战陪跑" description="不讲废话，只讲怎么拿走结果，拿走爆款。" delay={0.2} />
          <ModuleCard number="04" icon={BarChart3} title="数据激活" description="让沉寂僵尸号重生，找回流失的流量与商业机会。" delay={0.3} />
        </div>
      </div>
    </section>

    {/* Section 3: Delivery System (Part 2) */}
    <section id="content" className="relative z-10 py-32 px-8 lg:px-[60px] flex flex-col justify-center max-w-[1440px] mx-auto border-b border-border-subtle overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
        <div className="lg:col-span-8">
           <div className="text-[14px] font-bold text-brand-pink uppercase tracking-[2px] mb-4">Customized Delivery</div>
           <h2 className="text-5xl md:text-[88px] font-display font-[800] tracking-[-0.04em] leading-[0.9] mb-8">
              定制化。<br />
              <span className="pink-underline">变现体系</span>
           </h2>
        </div>
        <div className="lg:col-span-4 lg:pt-10">
          <p className="text-xl text-ink-muted font-medium leading-relaxed max-w-sm mb-12">
            从“拍什么、怎么拍、怎么变现”出发，提供全链路确定性交付，为您解决爆款网感与内容弹药。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
        <ModuleCard number="01" icon={ShieldCheck} title="深度定位诊断" description="账号诊断+1V1策略沟通，彻底分析提出目前卡点。" className="bg-white border-zinc-100" />
        <ModuleCard number="02" icon={Rocket} title="爆款内容赋能" description="套餐一：纯文案输出，解决内容卡壳，分析账号问题。" delay={0.1} className="bg-zinc-50 border-zinc-200" />
        <ModuleCard number="03" icon={Workflow} title="全案深度陪跑" description="套餐二：文案策划+后期剪辑，系统解决您的运营疑虑。" delay={0.2} className="bg-white border-zinc-100" />
        <ModuleCard number="04" icon={Users} title="商业变现闭环" description="套餐三：线下实地拍摄，手把手带跑达成商业闭环。" delay={0.3} className="bg-zinc-50 border-zinc-200" />
      </div>

      <div className="flex items-center justify-between pt-10 border-t border-border-subtle">
         <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
               {[1, 2, 3, 4, 5].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/a${i}/100/100`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
               ))}
            </div>
            <span className="text-sm font-bold text-zinc-400">已有数百位宠物ip实现精准变现</span>
         </div>
         <button className="cta-gradient text-white px-10 py-4 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all">
           1v1深度沟通
         </button>
      </div>
    </section>

    {/* Section Selector: Geometric Style */}
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8 items-center bg-white/40 backdrop-blur-3xl p-5 rounded-full border border-border-subtle shadow-2xl">
       <button className="w-10 h-10 rounded-full border border-border-subtle shadow-sm flex items-center justify-center text-zinc-300 hover:text-brand-pink transition-all bg-white/50">
         <div className="rotate-[-90deg]"><ArrowLeft size={16} /></div>
       </button>
       <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="group cursor-pointer flex items-center justify-center">
               <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === 1 ? 'bg-brand-pink scale-150 shadow-lg shadow-brand-pink/30' : 'bg-zinc-200 group-hover:bg-zinc-300'}`} />
            </div>
          ))}
       </div>
       <button className="w-10 h-10 rounded-full border border-border-subtle shadow-sm flex items-center justify-center text-zinc-300 hover:text-brand-pink transition-all bg-white/50">
         <div className="rotate-[90deg]"><ArrowLeft size={16} /></div>
       </button>
    </div>

    {/* Final Conversion: Geometric Balance Style */}
    <section id="price" className="relative z-10 py-48 px-8 text-center overflow-hidden">
       <div className="max-w-[1000px] mx-auto relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8F9FA] p-16 lg:p-24 rounded-[40px] border border-border-subtle shadow-2xl relative z-10"
          >
             <h2 className="text-[28px] sm:text-5xl md:text-[88px] font-display font-[800] tracking-[-0.04em] mb-12 text-ink-dark leading-[1.3] md:leading-[1.1]">
                深度诊断 <br />
                <span className="pink-underline">咨询合作</span>门槛
             </h2>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-16">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-4xl font-black italic text-zinc-300">¥</span>
                  <span className="text-7xl sm:text-[120px] font-display font-[800] tracking-[-0.06em] leading-none">800</span>
                </div>
                <span className="text-xl sm:text-2xl text-zinc-400 font-bold sm:ml-6 lowercase">/ session</span>
             </div>

             <p className="text-ink-muted mb-12 max-w-[620px] mx-auto font-medium text-lg">
               分析提出目前做账号的卡点问题 ➔ 1V1 深度对拆解决卡点 ➔ 达成商业变现闭环最终落地。<br />
               <span className="text-brand-pink">（过滤无效沟通，为高价值认知买单）</span>
             </p>

             <button className="cta-gradient text-white px-10 sm:px-20 py-6 sm:py-8 rounded-full text-lg sm:text-xl font-bold shadow-[0_20px_50px_rgba(255,182,193,0.4)] hover:scale-105 transition-all active:scale-95 w-full sm:w-auto">
               立即预约咨询
             </button>
          </motion.div>
       </div>
    </section>

    {/* Final Refined Footer */}
    <footer className="relative z-10 py-32 border-t border-zinc-100 text-center bg-white">
       <div className="max-w-[1440px] mx-auto px-6">
          <span className="font-display font-black text-4xl tracking-tighter mb-8 block">DY.ELITE CASE.</span>
          <div className="flex justify-center gap-12 font-black text-[11px] uppercase tracking-[0.4em] text-zinc-300 mb-20">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Cookie</span>
             <span>Help</span>
          </div>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.6em] mb-4">© 2026 OFFICIAL ELITE WORKSHOP / ALL RIGHTS RESERVED</p>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mx-auto" />
       </div>
    </footer>
  </div>
);

const CasesPage = () => (
  <div className="min-h-screen bg-white relative selection:bg-brand-pink/30 selection:text-white">
    <div className="fixed inset-0 pointer-events-none opacity-[0.2] bg-dot-pattern z-0" />
    <div className="relative z-10">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-brand-pink transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">返回主页</span>
          </Link>
        </div>
      </nav>
      
      <section className="px-6 pt-40 pb-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <span className="text-brand-pink text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">Project Showcase</span>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tight text-ink-dark leading-[0.9] mb-12">
            精英实践 <br />
            <span className="text-zinc-950">案例全纪实</span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            记录每一位在 ELITE 体系中完成蜕变的学习者。这不仅是作品的展示，更是逻辑与审美进化的见证。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map(i => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-zinc-100 rounded-[50px] mb-8 overflow-hidden border border-zinc-100 relative shadow-sm group-hover:shadow-2xl group-hover:shadow-zinc-200 transition-all duration-700">
                <img 
                  src={`https://picsum.photos/seed/case_ultra${i}/1200/800`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-colors duration-700" />
              </div>
              <div className="px-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-zinc-200" />
                  <span className="text-[10px] font-black text-brand-pink uppercase tracking-widest">Case 0{i}</span>
                </div>
                <h3 className="text-3xl font-display font-black text-ink-dark mb-4 group-hover:text-brand-pink transition-colors">某大厂设计体系 0-1 全链路重构项目</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md">
                  针对存量系统的复杂交互逻辑进行极致简化，通过 ELITE 独家工作流，将人效比提升了 45%，并沉淀了一套可自进化的资产库。
                </p>
                <div className="flex gap-4">
                  <span className="px-5 py-2 bg-zinc-50 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-wider">交互重塑</span>
                  <span className="px-5 py-2 bg-brand-pink/5 rounded-full text-[10px] font-bold text-brand-pink uppercase tracking-wider">交付冠军</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-zinc-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-display font-black mb-12">准备好开启您的 <br /> 案例库了吗？</h2>
          <Link to="/" className="inline-block px-12 py-5 bg-white text-zinc-950 rounded-2xl font-black text-sm hover:bg-brand-pink hover:text-white transition-all active:scale-95">
            立即返回加入我们
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cases" element={<CasesPage />} />
      </Routes>
    </HashRouter>
  );
}
