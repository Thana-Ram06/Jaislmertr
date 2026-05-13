import { AlertTriangle } from "lucide-react";

interface AiDisclaimerProps {
  variant?: "footer" | "planner" | "place";
}

export function AiDisclaimer({ variant = "footer" }: AiDisclaimerProps) {
  if (variant === "planner") {
    return (
      <div className="border border-[#C8A96B]/20 bg-[#C8A96B]/5 backdrop-blur-sm p-4 flex gap-3 items-start">
        <AlertTriangle size={14} className="text-[#C8A96B]/70 mt-0.5 shrink-0" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Itineraries are curated guides. Timings, entry fees, and availability may vary — verify locally before visiting.
        </p>
      </div>
    );
  }

  if (variant === "place") {
    return (
      <div className="border border-[#C8A96B]/20 bg-[#C8A96B]/5 backdrop-blur-sm p-4 space-y-2">
        <div className="flex items-center gap-2">
          <AlertTriangle size={12} className="text-[#C8A96B]/70 shrink-0" />
          <p className="text-xs font-medium tracking-widest uppercase text-[#C8A96B]/70">Traveller's Note</p>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
          <li>• Visuals may include AI-generated representations for artistic purposes</li>
          <li>• Entry timings & fees may change — verify locally</li>
          <li>• Pricing and availability can vary by season</li>
          <li>• Weather conditions may affect experiences</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="border border-[#C8A96B]/15 bg-[#C8A96B]/5 backdrop-blur-sm p-6 rounded-none">
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5">
          <div className="w-8 h-8 border border-[#C8A96B]/30 flex items-center justify-center">
            <AlertTriangle size={14} className="text-[#C8A96B]/80" />
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-medium tracking-widest uppercase text-[#C8A96B]/80">
            Visual & Content Disclaimer
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Some visuals used on Jaiscape are AI-generated cinematic representations created for artistic and inspirational purposes. Actual locations, colours, atmosphere, and experiences may vary in real life. Travellers are encouraged to verify important travel details independently before visiting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pt-1">
            {[
              "Timings may change without notice",
              "Pricing may vary by season",
              "Weather may affect experiences",
              "Booking availability may differ",
            ].map((note) => (
              <p key={note} className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
                <span className="text-[#C8A96B]/40">·</span> {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
