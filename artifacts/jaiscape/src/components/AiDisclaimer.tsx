import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, Info, Clock, Tag, Cloud, CalendarCheck } from "lucide-react";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = [
    {
      icon: <Info size={14} className="text-[#C8A96B]" />,
      title: "AI-Generated Visuals",
      desc: "Some visuals on Jaisalmer.city are AI-generated cinematic representations created for artistic and inspirational purposes. Actual locations, colours, atmosphere, and experiences may differ from what is shown.",
    },
    {
      icon: <Clock size={14} className="text-[#C8A96B]" />,
      title: "Timings & Access",
      desc: "Opening hours, entry timings, and site access may change without notice. Always verify locally or with official sources before visiting.",
    },
    {
      icon: <Tag size={14} className="text-[#C8A96B]" />,
      title: "Pricing & Fees",
      desc: "Entry fees, camp tariffs, safari costs, and restaurant prices vary by season and operator. Verify current pricing directly with the service provider.",
    },
    {
      icon: <Cloud size={14} className="text-[#C8A96B]" />,
      title: "Weather Conditions",
      desc: "Desert weather in Jaisalmer can be extreme. Experiences like dune safaris, outdoor dining, and camel rides may be affected by heat, sandstorms, or rain.",
    },
    {
      icon: <CalendarCheck size={14} className="text-[#C8A96B]" />,
      title: "Booking Availability",
      desc: "Camp stays, jeep safaris, and heritage hotel bookings fill up quickly during peak season (Oct–Mar). Availability listed is indicative — pre-book directly to confirm.",
    },
  ];

  return (
    <>
      {/* Footer inline trigger — rendered by Footer component */}
      <button
        onClick={() => setOpen(true)}
        aria-label="View disclaimer"
        className="group inline-flex items-center gap-2 border border-[#C8A96B]/20 px-3 py-1.5 hover:border-[#C8A96B]/50 transition-all duration-300"
      >
        <AlertTriangle size={11} className="text-[#C8A96B]/60 group-hover:text-[#C8A96B] transition-colors" />
        <span className="text-[10px] font-medium tracking-widest uppercase text-[#C8A96B]/60 group-hover:text-[#C8A96B] transition-colors">
          Disclaimer
        </span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111111] border border-[#C8A96B]/20 w-full max-w-lg max-h-[85vh] overflow-y-auto relative"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C8A96B]/60 to-transparent" />

              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#C8A96B]/30 flex items-center justify-center shrink-0">
                    <AlertTriangle size={13} className="text-[#C8A96B]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg text-foreground">Important Disclaimer</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Please read before you travel</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors ml-4 shrink-0 mt-0.5"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#C8A96B]/10 mx-6" />

              {/* Content */}
              <div className="p-6 space-y-5">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-3"
                  >
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-[#C8A96B]/80 mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer note */}
              <div className="px-6 pb-6">
                <div className="border-t border-[#C8A96B]/10 pt-4">
                  <p className="text-[10px] text-muted-foreground/50 leading-relaxed text-center">
                    Travellers are encouraged to independently verify all travel details before visiting Jaisalmer.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
