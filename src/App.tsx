/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mic2, 
  Hand, 
  ClipboardCheck, 
  ArrowRight, 
  Wifi, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Cpu,
  Layers,
  Smartphone,
  PhoneOff,
  CloudLightning,
  Construction,
  MessageSquareText,
  UserCheck,
  Package,
  Activity,
  History,
  Lock,
  Menu,
  X,
  Headphones,
  Mic,
  Radio,
  Target,
  HardHat,
  Shield,
  Link,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { useState } from "react";

const SectionHeader = ({ eyebrow, title, subtitle, centered = false }: { eyebrow?: string, title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {eyebrow && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4 block"
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, body, index }: { icon: any, title: string, body: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{body}</p>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1599708147891-689824327005?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1549439602-43ebcb232811?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container-wide py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-brand-700">
              GMIC AI Inc
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#why" className="hover:text-brand-600 transition-colors">Why MIC05</a>
            <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How It Works</a>
            <a href="#use-cases" className="hover:text-brand-600 transition-colors">Use Cases</a>
            <a href="#integration" className="hover:text-brand-600 transition-colors">Integration & Scale</a>
            <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
              Discuss a Pilot
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 p-6 absolute w-full"
          >
            <div className="flex flex-col gap-4 text-gray-600">
              <a href="#why" onClick={() => setIsMenuOpen(false)}>Why MIC05</a>
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#use-cases" onClick={() => setIsMenuOpen(false)}>Use Cases</a>
              <a href="#integration" onClick={() => setIsMenuOpen(false)}>Integration & Scale</a>
              <button className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold">
                Discuss a Pilot
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-50/50 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-50/50 blur-[100px] rounded-full" />
        </div>
        
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-8"
              >
                Voice AI for HVAC field work
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold leading-[1.1] text-gray-900 mb-8"
              >
                Help HVAC Technicians Work <span className="text-brand-600">Hands-Free</span> With Voice AI.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
              >
                Our wearable AI device captures technician speech, triggers actions with physical buttons, plays short voice feedback, and connects with app or cloud software to create job notes, reports, and service workflows.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center gap-2 group">
                  Discuss a Pilot
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-bold text-lg hover:border-brand-600 hover:text-brand-600 transition-all">
                  See How It Works
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-8 flex-wrap"
              >
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Chest voice capture
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Button-triggered AI
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> TTS feedback
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="/input_file_0.png" 
                  alt="GMIC AI wearable device in field use" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex flex-end p-8 flex-col justify-end">
                  <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                        <Mic2 size={20} />
                      </div>
                      <span className="text-base font-bold text-gray-900 tracking-tight">Voice Capture Active</span>
                    </div>
                    <p className="text-xs text-brand-800 bg-brand-50 p-3 rounded-xl italic leading-relaxed border border-brand-100">
                      "Outdoor unit inspected. Fan motor noise noted. Adding to job notes..."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating UI element */}
              <div className="absolute -top-10 -right-10 hidden lg:block">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 min-w-[220px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">App Connected</span>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 text-[9px] font-bold text-green-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="why" className="py-24 bg-gray-50">
        <div className="container-wide">
          <SectionHeader 
            centered
            title="Phones are not built for HVAC field work."
            subtitle="Technicians work with tools, gloves, ladders, noisy units, and equipment panels. If AI depends on typing, tapping, or holding a phone, it will not fit the real service environment."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mb-8">
                <img src="https://picsum.photos/seed/phone-struggle/800/800" alt="Technician struggling with phone" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold">Phones interrupt the job</h3>
              <p className="text-gray-600">Technicians cannot stop every few minutes to unlock a phone, open an app, type notes, or search for instructions while working on equipment.</p>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mb-8">
                <img src="https://picsum.photos/seed/van-notes/800/800" alt="Technician writing notes in van" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold">Important details get missed</h3>
              <p className="text-gray-600">Symptoms, readings, parts used, customer approvals, and repair results are often spoken on site but never captured clearly.</p>
            </div>

            <div className="space-y-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mb-8">
                <img src="https://picsum.photos/seed/ai-voice/800/800" alt="Technician speaking to device" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold">Noise disrupts speech capture</h3>
              <p className="text-gray-600">Outdoor condensers, rooftop units, mechanical rooms, wind, traffic, and tools can make phone microphones unreliable for capturing technician speech clearly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Step-by-Step workflow */}
      <section id="how-it-works" className="py-24 bg-white border-y border-gray-100">
        <div className="container-wide">
          <SectionHeader 
            centered
            title="How it works in a real HVAC service call."
            subtitle="Clip it on, talk while working, press to trigger actions, and let the app or cloud software turn field speech into useful service records."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative mt-16">
            {[
              {
                title: "Wear",
                desc: "Clip MIC05 to the technician’s chest before the job starts.",
                icon: Hand
              },
              {
                title: "Talk",
                desc: "Capture symptoms, readings, parts, requests, and repair progress while working.",
                icon: Mic2
              },
              {
                title: "Trigger",
                desc: "Use physical buttons to mark key moments, confirm steps, or trigger AI actions.",
                icon: Zap
              },
              {
                title: "AI Process",
                desc: "Turn field speech into transcription, job notes, checklists, reports, or AI support.",
                icon: Cpu
              },
              {
                title: "Feedback & Records",
                desc: "Provide short field feedback and generate structured service records.",
                icon: ClipboardCheck
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col items-center"
              >
                {/* Main Content Card */}
                <div className="w-full h-full p-6 rounded-[2rem] bg-gray-50 border border-transparent group-hover:bg-white group-hover:border-brand-100 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 relative flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {item.desc}
                  </p>

                  {/* Desktop Connecting Arrow between cards */}
                  {i < 4 && (
                    <div className="hidden lg:flex absolute top-12 -right-3 translate-x-1/2 w-6 h-6 rounded-full bg-white border border-gray-100 items-center justify-center text-gray-300 z-20 shadow-sm group-hover:text-brand-600 group-hover:border-brand-200 transition-colors">
                      <ChevronRight size={14} strokeWidth={3} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Positioning */}
      <section className="py-24">
        <div className="container-wide">
          <div className="bg-brand-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-brand-800 -z-0 skew-x-[-15deg] translate-x-20" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-end relative z-10">
              {/* Product Gallery - Left Side */}
              <div className="flex flex-col gap-6 order-1 lg:order-1">
                <div>
                  <span className="text-brand-300 font-bold uppercase tracking-widest text-sm mb-4 block">Hardware Selection</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    MIC05: a wearable voice device for HVAC field work.
                  </h2>
                </div>
                <div className="max-w-md w-full mx-auto lg:mx-0">
                  <div className="relative rounded-[2rem] shadow-2xl aspect-square overflow-hidden group border border-white/5">
                    <motion.img 
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      src={productImages[activeImage]} 
                      alt="MIC05 Product Shot" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Pagination Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 bg-black/20 backdrop-blur-md rounded-full">
                      {productImages.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${activeImage === idx ? 'w-6 bg-brand-400' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="order-2 lg:order-2">
                <p className="text-brand-100 text-lg mb-10 leading-relaxed">
                  MIC05 is a compact chest-mounted device designed for technician voice capture, physical workflow control, short feedback, and app or cloud connectivity.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Portable back-clip recorder",
                    "Physical workflow buttons",
                    "Speaker and vibration feedback",
                    "High-capacity battery",
                    "Real-time cloud connectivity"
                  ].map((step, i) => (
                    <motion.div 
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                    >
                      <span className="font-medium">{step}</span>
                      <CheckCircle2 size={18} className="text-brand-400" />
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-900 flex-shrink-0">
                    <Smartphone />
                  </div>
                  <p className="font-semibold text-base leading-snug">
                    Use MIC05 with your own software or partner with us for full app, firmware, and hardware customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-gray-50">
        <div className="container-wide">
          <SectionHeader 
            centered
            title="What HVAC teams can do with MIC05."
            subtitle="MIC05 helps turn daily field conversations into job records, troubleshooting support, checklists, reports, and training data."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                scene: "Scene 1",
                title: "Voice-to-job notes",
                desc: "Technician speech can become service notes, parts lists, customer summaries, and follow-up tasks.",
                image: "https://picsum.photos/seed/voice-notes/800/600",
                icon: MessageSquareText
              },
              {
                scene: "Scene 2",
                title: "AI troubleshooting support",
                desc: "Technicians can ask questions about symptoms, error codes, readings, wiring checks, or next-step procedures.",
                image: "https://picsum.photos/seed/ai-support/800/600",
                icon: History
              },
              {
                scene: "Scene 3",
                title: "Checklist and SOP guidance",
                desc: "AI can guide technicians through inspection steps, safety checks, maintenance procedures, or company-specific workflows.",
                image: "https://picsum.photos/seed/sop-check/800/600",
                icon: ClipboardCheck
              },
              {
                scene: "Scene 4",
                title: "Training and service quality review",
                desc: "Field voice and button events can help managers review jobs, improve training, and standardize service quality.",
                image: "https://picsum.photos/seed/training-qc/800/600",
                icon: History
              }
            ].map((scene, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={scene.image} alt={scene.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <scene.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">{scene.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {scene.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto shadow-2xl rounded-[2rem] overflow-hidden bg-white">
            <div className="p-12 bg-brand-900 text-white">
              <h2 className="text-3xl font-bold mb-4">Why MIC05 fits HVAC field work better.</h2>
              <p className="text-brand-200 leading-relaxed">Phones and Bluetooth headsets can capture audio, but they are not built for noisy, hands-on HVAC workflows. MIC05 is designed for field voice input, AI button actions, short feedback, and app integration.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-8 font-bold text-gray-500 uppercase tracking-wider text-xs w-1/4">Field Need</th>
                    <th className="p-8 font-bold text-gray-500 uppercase tracking-wider text-xs w-1/4">
                      <div className="flex items-center gap-2">
                        <Smartphone size={14} className="text-gray-400" />
                        Phone
                      </div>
                    </th>
                    <th className="p-8 font-bold text-gray-500 uppercase tracking-wider text-xs w-1/4">
                      <div className="flex items-center gap-2">
                        <Headphones size={14} className="text-gray-400" />
                        Bluetooth Headset
                      </div>
                    </th>
                    <th className="p-8 font-bold text-brand-600 uppercase tracking-wider text-xs w-1/4 bg-brand-50/50">
                      <div className="flex items-center gap-2">
                        <Mic2 size={14} className="text-brand-600" />
                        MIC05
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { need: "Audio Capture", icon: <Mic size={18} className="text-gray-400" />, phone: "Often far from the technician", bt: "Near mouth, but environment noise leaks", mic: "Fixed near the voice on the chest" },
                    { need: "Operator Feedback", icon: <Radio size={18} className="text-gray-400" />, phone: "Screen or phone speaker", bt: "Ear-only audio feedback", mic: "Speaker + vibration feedback" },
                    { need: "Workflow Intent", icon: <Target size={18} className="text-gray-400" />, phone: "Touchscreen-based interactions", bt: "Limited/generic button control", mic: "Physical buttons trigger AI actions" },
                    { need: "Field Durability", icon: <HardHat size={18} className="text-gray-400" />, phone: "Screen prone to damage", bt: "Consumer-grade build", mic: "Built for industrial environments" },
                    { need: "Data Privacy", icon: <Shield size={18} className="text-gray-400" />, phone: "Generic device privacy", bt: "Depends on phone security", mic: "Enterprise-first data handling" },
                    { need: "App integration", icon: <Link size={18} className="text-gray-400" />, phone: "Phone stays the main interface", bt: "Standard audio accessory profile", mic: "Direct event-streaming to cloud/app" }
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-8 text-base font-bold text-gray-900 border-r border-gray-50">
                        <div className="flex items-center gap-3">
                          {row.icon}
                          {row.need}
                        </div>
                      </td>
                      <td className="p-8 text-sm text-gray-500">{row.phone}</td>
                      <td className="p-8 text-sm text-gray-500">{row.bt}</td>
                      <td className="p-8 text-sm font-bold text-brand-600 bg-brand-50/50 relative">
                        {idx === 0 && <div className="absolute top-0 left-0 right-0 h-full border-x-2 border-brand-200 pointer-events-none" />}
                        {idx === 5 && <div className="absolute top-0 left-0 right-0 h-full border-x-2 border-b-2 border-brand-200 rounded-b-2xl pointer-events-none" />}
                        {idx > 0 && idx < 5 && <div className="absolute top-0 left-0 right-0 h-full border-x-2 border-brand-200 pointer-events-none" />}
                        <div className="relative z-10 flex items-center gap-2">
                          <CheckCircle2 size={12} className="flex-shrink-0" />
                          {row.mic}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      {/* Tech Team Support */}
      <section id="integration" className="py-20 bg-gray-900 text-white">
        <div className="container-wide">
          <div className="mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Integration & Scale
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              From field testing to mass production.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 max-w-4xl"
            >
              Backed by proven manufacturing lines, we support AI hardware projects through pilot validation, firmware tuning, RF testing, assembly, and scalable OEM/ODM production.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { val: "16+ Years", label: "Production & R&D experience" },
              { val: "20+ Engineers", label: "Senior R&D team" },
              { val: "300+ Staff", label: "Production workforce" },
              { val: "SMT / RF / Assembly", label: "Manufacturing lines" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-xl font-bold text-brand-400 mb-2">{stat.val}</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
              <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-8">
                <Cpu />
              </div>
              <h3 className="text-2xl font-bold mb-6">Integration Support</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3"><ChevronRight className="text-brand-500 mt-1" size={16} /> BLE / GATT documentation review</li>
                <li className="flex items-start gap-3"><ChevronRight className="text-brand-500 mt-1" size={16} /> Button event mapping support</li>
                <li className="flex items-start gap-3"><ChevronRight className="text-brand-500 mt-1" size={16} /> Voice streaming behavior validation</li>
                <li className="flex items-start gap-3"><ChevronRight className="text-brand-500 mt-1" size={16} /> Speaker / TTS playback behavior review</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-8">
                <Layers />
              </div>
              <h3 className="text-2xl font-bold mb-6">Production Readiness</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3"><ChevronRight className="text-purple-500 mt-1" size={16} /> Firmware behavior refinement</li>
                <li className="flex items-start gap-3"><ChevronRight className="text-purple-500 mt-1" size={16} /> Hardware feature optimization</li>
                <li className="flex items-start gap-3"><ChevronRight className="text-purple-500 mt-1" size={16} /> RF testing and assembly support</li>
                <li className="flex items-start gap-3"><ChevronRight className="text-purple-500 mt-1" size={16} /> Pilot → custom SKU → mass production</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=800"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-video rounded-[2rem] overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10"
              >
                <img src={img} className="w-full h-full object-cover" alt="Factory" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Buying Path */}
      <section className="py-24 bg-brand-50/50">
        <div className="container-wide">
          <SectionHeader 
            centered
            title="How we help you move from pilot to production."
            subtitle="Start with your real field needs, validate the workflow with technicians, then decide the right hardware, software, and production path."
          />
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-16">
            {[
              { 
                stage: "Stage 1", 
                title: "Field Pilot", 
                desc: "Validate the use case with real HVAC technicians and service calls.", 
                items: ["Real field testing", "Technician feedback", "Workflow validation"], 
                primary: true,
                cta: "Discuss a Pilot"
              },
              { 
                stage: "Stage 2", 
                title: "Customization", 
                desc: "Refine the device behavior, app integration, and feedback logic based on pilot results.", 
                items: ["Button logic", "App / cloud integration", "Firmware tuning"], 
                primary: false 
              },
              { 
                stage: "Stage 3", 
                title: "Production Planning", 
                desc: "Prepare the hardware configuration, cost target, production schedule, and scale-up plan.", 
                items: ["SKU definition", "Cost and BOM review", "Production roadmap"], 
                primary: false 
              }
            ].map((pkg, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] flex flex-col justify-between ${pkg.primary ? 'bg-white shadow-2xl border-2 border-brand-500 ring-8 ring-brand-100' : 'bg-white/50 border border-gray-100'}`}>
                <div>
                  <span className={`font-bold text-xs uppercase tracking-widest ${pkg.primary ? 'text-brand-600' : 'text-gray-400'}`}>{pkg.stage}</span>
                  <h4 className="text-2xl font-bold mt-4 mb-2">{pkg.title}</h4>
                  <p className="text-gray-500 mb-8 font-medium text-sm leading-relaxed">{pkg.desc}</p>
                  <ul className="space-y-4">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={18} className="text-brand-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {pkg.primary && (
                  <button className="w-full py-4 bg-brand-600 text-white rounded-2xl font-bold mt-12 hover:bg-brand-700 transition-all">
                    {pkg.cta}
                  </button>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section id="pilot" className="py-32 relative overflow-hidden bg-brand-600">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 to-blue-600" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 Q50,0 100,100" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0,50 Q50,50 100,50" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="container-wide relative z-10 text-center px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8">
            Partnership Opportunity
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">Discuss your HVAC AI pilot.</h2>
          <p className="text-brand-100 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed opacity-90 font-medium">
            Tell us about your field workflow, app requirements, and production goals. We will help you evaluate the right pilot and scale-up path for your team.
          </p>
          <div className="flex flex-col items-center gap-12">
            <button className="px-12 py-6 bg-white text-brand-600 rounded-full font-bold text-xl md:text-2xl hover:bg-brand-50 transition-all shadow-2xl flex items-center gap-3 group">
              Discuss a Pilot
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/70 text-[11px] font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-200" /> Confirm Workflow
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-200" /> Validate Audio/Buttons
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-200" /> Plan SKU Path
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Left side - Brand */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-200">
                  M
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">GMIC AI Inc</span>
              </div>
              <p className="text-gray-500 text-base max-w-xs leading-relaxed font-medium">
                Professional wearable voice hardware for HVAC field AI workflows.
              </p>
            </div>
            
            {/* Middle section - Links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-gray-900 text-sm">Product</h4>
                <nav className="flex flex-col gap-3 text-sm text-gray-500">
                  <a href="#why" className="hover:text-brand-600 transition-colors">Why MIC05</a>
                  <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How It Works</a>
                  <a href="#use-cases" className="hover:text-brand-600 transition-colors">Use Cases</a>
                </nav>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-gray-900 text-sm">Business</h4>
                <nav className="flex flex-col gap-3 text-sm text-gray-500">
                  <a href="#integration" className="hover:text-brand-600 transition-colors">Integration</a>
                  <a href="#pilot" className="hover:text-brand-600 transition-colors">Pilot Process</a>
                </nav>
              </div>
            </div>
            
            {/* Right side - Contact Info */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <h4 className="font-bold text-gray-900 text-sm">Contact (California Office)</h4>
              <div className="space-y-4 text-sm text-gray-500">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-brand-600 group-hover:bg-brand-50 transition-all">
                    <Phone size={16} />
                  </div>
                  <span className="font-medium">+1 669 900 0008</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-brand-600 group-hover:bg-brand-50 transition-all">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:Trigg@gmic.ai" className="font-medium hover:text-brand-600 transition-colors">Trigg@gmic.ai</a>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-brand-600 group-hover:bg-brand-50 transition-all mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-relaxed font-medium">
                    300 S Harbor Blvd, Ste 1020<br />
                    Anaheim, CA 92805, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-sm text-gray-400 font-medium italic">
                © 2026 GMIC AI Inc. Built for field precision.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="flex gap-8 text-[12px] text-gray-400 font-bold uppercase tracking-wider">
                <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll Indicator or something extra? Custom cursor not needed, but subtle animations on entry are handled by motion. */}
    </div>
  );
}
