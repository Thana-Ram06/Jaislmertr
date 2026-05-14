import { Layout } from "@/components/Layout";
import aboutHero from "@/assets/images/about-hero.png";

export default function About() {
  return (
    <Layout>
      <div className="bg-[#0B0B0B]">
        <div className="relative h-[60vh] w-full flex items-center justify-center border-b border-[#C8A96B]/20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/50 to-[#0B0B0B]" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8">
              "We believe travel should be felt, not just seen."
            </h1>
            <div className="w-24 h-px bg-[#C8A96B] mx-auto" />
          </div>
        </div>

        <div className="py-32 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="font-serif text-4xl mb-6 text-[#C8A96B]">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Jaisalmer.city was born out of a desire to showcase the golden city of Jaisalmer beyond the typical tourist trails. We saw visitors rushing through centuries of history, missing the quiet magic that happens when the desert sun hits the sandstone walls.
                </p>
                <p>
                  We are a collective of locals, travelers, and designers who want to elevate the way you experience this extraordinary landscape. We don't just list places; we curate feelings.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-4xl mb-6 text-[#C8A96B]">Our Values</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-foreground mb-2">Discovery</h3>
                  <p className="text-muted-foreground">Finding beauty in the overlooked corners and hidden alleys of the fort.</p>
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Authenticity</h3>
                  <p className="text-muted-foreground">Connecting with the real culture, music, and flavors of Rajasthan.</p>
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Luxury</h3>
                  <p className="text-muted-foreground">Providing seamless, premium experiences that let you simply be present.</p>
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Community</h3>
                  <p className="text-muted-foreground">Supporting local artisans and preserving the heritage of the Thar desert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
