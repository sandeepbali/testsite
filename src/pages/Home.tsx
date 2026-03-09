import { Link } from 'react-router-dom';
import { 
  Star, Triangle, Cloud, MessageCircle, 
  Camera, Pen, Book, Mail, Menu, Flag, Smartphone,
  Lock, Instagram, Search
} from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-navy flex justify-center items-start py-10 noise-bg overflow-x-auto">
      {/* Main Poster Container */}
      <div className="relative w-[1000px] h-[1400px] bg-navy shadow-2xl overflow-hidden border border-gold/10">
        
        {/* Top Left Menu Curve */}
        <div className="absolute top-0 left-0 w-[450px] h-[500px] bg-navy-light rounded-br-[250px] border-r border-b border-gold/30 z-10 shadow-xl">
          <div className="p-10 pt-16">
            <h1 className="text-6xl font-sans font-light tracking-widest text-gold mb-12 relative">
              <span className="absolute -left-8 top-1">&lt;</span>
              ØBLIQUE
              <span className="absolute -right-8 top-1">&gt;</span>
              {/* Squiggly lines above and below */}
              <svg className="absolute -top-6 left-0 w-full h-4" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10 T120,10 T140,10 T160,10 T180,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <svg className="absolute -bottom-6 left-0 w-full h-4" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10 T100,10 T120,10 T140,10 T160,10 T180,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </h1>

            <nav className="flex flex-col gap-6 text-2xl font-sans">
              <Link to="/home" className="flex items-center gap-4 hover:text-white group">
                <div className="w-6 h-6 rounded-full bg-gold group-hover:bg-white transition-colors" />
                <span>Home</span>
                <div className="flex-1 border-b border-gold/50 mx-4" />
                <span className="text-sm font-hand">(' |</span>
              </Link>
              <Link to="/projects" className="flex items-center gap-4 hover:text-white group">
                <Star className="w-6 h-6" />
                <span>Projects</span>
                <div className="flex-1 border-b border-gold/50 mx-4" />
                <span className="text-sm font-hand">*</span>
              </Link>
              <Link to="/process" className="flex items-center gap-4 hover:text-white group">
                <Triangle className="w-6 h-6" />
                <span>Process</span>
                <div className="flex-1 border-b border-gold/50 mx-4" />
                <span className="text-sm font-hand">&gt;</span>
              </Link>
              <Link to="/about" className="flex items-center gap-4 hover:text-white group">
                <Cloud className="w-6 h-6" />
                <span>About</span>
                <div className="flex-1 border-b border-gold/50 mx-4" />
                <span className="text-sm font-hand">/</span>
              </Link>
              <Link to="/contact" className="flex items-center gap-4 hover:text-white group">
                <MessageCircle className="w-6 h-6" />
                <span>Contact</span>
                <svg className="w-16 h-4 ml-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </nav>
          </div>
        </div>

        {/* Hand-drawn Annotations */}
        <div className="absolute inset-0 pointer-events-none z-50 font-hand text-xl text-gold-light">
          {/* ASYMMETRIC LAYOUT */}
          <div className="absolute top-[80px] left-[400px] rotate-[-5deg]">
            ASYMMETRIC<br/>LAYOUT!
            <svg className="absolute top-4 -left-16 w-16 h-16 overflow-visible">
              <path d="M60,0 Q30,20 0,40" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M10,30 L0,40 L15,45" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* NO GRID */}
          <div className="absolute top-[70px] left-[600px] rotate-[5deg]">
            NO GRID!
            <svg className="absolute top-8 left-10 w-32 h-16 overflow-visible">
              <path d="M0,0 Q40,30 80,10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M70,0 L80,10 L75,20" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* FRAGMENTED CONTENT */}
          <div className="absolute top-[80px] right-[50px] text-right">
            FRAGMENTED<br/>CONTENT
            <svg className="absolute top-16 right-10 w-16 h-32 overflow-visible">
              <path d="M20,0 Q40,40 0,80" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M10,70 L0,80 L-10,70" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* MAIN FEATURE AREA */}
          <div className="absolute top-[750px] left-[150px] text-center">
            MAIN FEATURE AREA<br/>(CHAOTIC!)
            <svg className="absolute -top-16 left-10 w-32 h-32 overflow-visible">
              <path d="M20,40 Q-20,0 40,-40" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M30,-30 L40,-40 L50,-30" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* SCROLL TRICKS */}
          <div className="absolute top-[820px] left-[400px] rotate-[-10deg]">
            SCROLL<br/>TRICKS
            <svg className="absolute -top-10 left-10 w-16 h-16 overflow-visible">
              <path d="M0,20 Q20,-20 40,0" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M30,-10 L40,0 L30,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* TRICKS HERE */}
          <div className="absolute top-[820px] left-[620px]">
            TRICKS<br/>HERE
            <svg className="absolute -top-16 left-10 w-16 h-16 overflow-visible">
              <path d="M0,40 Q20,0 40,-20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M30,-10 L40,-20 L50,-10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* UNCLEAR PATHWAY */}
          <div className="absolute top-[750px] right-[50px]">
            UNCLEAR<br/>PATHWAY
            <svg className="absolute -top-24 right-10 w-16 h-32 overflow-visible">
              <path d="M0,60 Q40,30 20,-20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M10,-10 L20,-20 L30,-10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* OVERLAPPING BLOCKS */}
          <div className="absolute top-[500px] left-[600px] rotate-[-5deg]">
            OVERLAPPING<br/>BLOCKS
            <svg className="absolute top-10 -left-16 w-32 h-16 overflow-visible">
              <path d="M40,0 Q10,20 -20,10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M-10,0 L-20,10 L-10,20" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* CHAOS ENGAGEMENT */}
          <div className="absolute top-[950px] right-[280px] rotate-[-90deg] origin-bottom-right">
            CHAOS ENGAGEMENT
            <svg className="absolute top-4 -right-10 w-16 h-16 overflow-visible rotate-[90deg]">
              <path d="M0,0 Q20,-10 40,0" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M30,-10 L40,0 L30,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* HEADER / FOOTER JUMBLED */}
          <div className="absolute bottom-[180px] left-[450px] text-center">
            HEADER / FOOTER<br/>JUMBLED
            <svg className="absolute top-10 -left-20 w-32 h-32 overflow-visible">
              <path d="M40,0 Q-20,40 -60,60" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M-50,50 L-60,60 L-50,70" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* MOBILE VERSION? (TBD) */}
          <div className="absolute bottom-[150px] right-[50px] text-center">
            MOBILE<br/>VERSION?<br/>(TBD)
            <svg className="absolute -top-16 right-10 w-16 h-32 overflow-visible">
              <path d="M0,40 Q20,0 10,-30" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0,-20 L10,-30 L20,-20" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Story Text 1 */}
        <div className="absolute top-[180px] left-[450px] w-[250px]">
          <h2 className="text-2xl font-sans mb-2">STORY TEXT 1</h2>
          <p className="text-sm font-sans leading-tight text-gold-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <svg className="absolute -bottom-8 left-0 w-16 h-16 overflow-visible text-gold">
            <path d="M0,0 L30,0 L30,20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M20,10 L30,20 L40,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          {/* Eye Icon */}
          <div className="absolute -bottom-12 left-12">
            <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>

        {/* Dark Square Top Right */}
        <Link to="/dark-square" className="absolute top-[180px] right-[100px] w-[150px] h-[150px] bg-navy-light shadow-2xl border border-gold/10 hover:border-gold/50 transition-colors" />

        {/* Project Title */}
        <div className="absolute top-[380px] left-[450px] w-[250px]">
          <h2 className="text-2xl font-sans mb-2">PROJECT TITLE</h2>
          <p className="text-sm font-sans leading-tight text-gold-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Main Feature Area (Collage) */}
        <div className="absolute top-[450px] left-[80px] w-[450px] h-[300px]">
          <Link to="/feature-1" className="absolute top-0 left-0 w-[200px] h-[250px] border border-gold p-1 bg-navy z-10 hover:z-50 transition-all hover:scale-105">
            <img src="https://picsum.photos/seed/abstract/400/500" alt="Abstract" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          
          <Link to="/feature-2" className="absolute top-[20px] left-[180px] w-[150px] h-[150px] border border-gold p-1 bg-navy z-20 hover:z-50 transition-all hover:scale-105">
            <img src="https://picsum.photos/seed/geometry/300/300" alt="Geometry" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>

          <Link to="/feature-3" className="absolute top-[160px] left-[200px] w-[180px] h-[140px] border border-gold p-1 bg-navy z-30 hover:z-50 transition-all hover:scale-105">
            <img src="https://picsum.photos/seed/cubes/360/280" alt="Cubes" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>

          {/* Typography Block */}
          <Link to="/typography" className="absolute top-[100px] left-[120px] w-[120px] h-[160px] bg-[#e8dcc4] text-navy flex items-center justify-center z-40 shadow-2xl hover:scale-105 transition-transform">
            <div className="text-4xl font-serif leading-none text-center">
              Typ<br/>ogra<br/>phy
            </div>
          </Link>
        </div>

        {/* Star Shape (Latest News) */}
        <div className="absolute top-[450px] right-[50px] w-[400px] h-[350px] z-20">
          {/* We'll use a clip-path for the star/lightning shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy border border-gold/30 shadow-[0_0_30px_rgba(212,192,152,0.1)]"
               style={{ clipPath: 'polygon(50% 0%, 65% 35%, 100% 35%, 75% 60%, 85% 100%, 50% 75%, 15% 100%, 25% 60%, 0% 35%, 35% 35%)' }}>
            {/* Inner grid pattern */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'perspective(500px) rotateX(60deg) scale(2)' }} />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            <h3 className="text-xl font-sans mb-4 bg-navy px-2 z-10">LATEST NEWS</h3>
            <div className="grid grid-cols-3 gap-4 z-10">
              <Link to="/news/1" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Camera size={20} /></Link>
              <Link to="/news/2" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Pen size={20} /></Link>
              <Link to="/news/3" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Book size={20} /></Link>
              <Link to="/news/4" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Mail size={20} /></Link>
              <Link to="/news/5" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Menu size={20} /></Link>
              <Link to="/news/6" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Flag size={20} /></Link>
              <Link to="/news/7" className="w-10 h-10 border border-gold flex items-center justify-center hover:bg-gold hover:text-navy transition-colors col-start-2"><Smartphone size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Portfolio Blocks */}
        {/* Web Design */}
        <div className="absolute top-[850px] left-[80px] w-[250px]">
          <Link to="/web-design" className="block w-full h-[150px] border border-gold p-1 bg-navy hover:scale-105 transition-transform mb-4">
            <img src="https://picsum.photos/seed/ui1/500/300" alt="Web Design 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <Link to="/web-design-2" className="block w-[200px] h-[100px] border border-gold p-1 bg-navy hover:scale-105 transition-transform mb-4 -mt-10 ml-10 z-10 relative">
            <img src="https://picsum.photos/seed/ui2/400/200" alt="Web Design 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <h3 className="text-xl font-sans mb-2">WEB DESIGN</h3>
          <div className="w-full h-px bg-gold mb-1" />
          <div className="w-3/4 h-px bg-gold mb-1" />
          <div className="w-5/6 h-px bg-gold" />
        </div>

        {/* Art */}
        <div className="absolute top-[920px] left-[360px] w-[180px]">
          <h3 className="text-xl font-sans mb-2">ART</h3>
          <Link to="/art" className="block w-full h-[180px] border border-gold p-1 bg-navy hover:scale-105 transition-transform mb-4">
            <img src="https://picsum.photos/seed/painting/360/360" alt="Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          {/* Squiggly line */}
          <svg className="w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Design */}
        <div className="absolute top-[850px] left-[560px] w-[180px]">
          <Link to="/design" className="block w-full h-[140px] border border-gold p-1 bg-navy hover:scale-105 transition-transform mb-4">
            <img src="https://picsum.photos/seed/plan/360/280" alt="Design Plan" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <h3 className="text-xl font-sans mb-2">DESIGN</h3>
          {/* Squiggly line */}
          <svg className="w-full h-4 mb-2" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="w-full h-px bg-gold mb-1" />
          <div className="w-4/5 h-px bg-gold" />
        </div>

        {/* Sidebar Stuff */}
        <div className="absolute top-[820px] right-[80px] w-[200px] h-[350px] bg-navy-light shadow-2xl border border-gold/10 p-6 flex flex-col items-center">
          <h3 className="text-xl font-sans mb-4 text-center">RANDOM<br/>THOUGHTS</h3>
          <div className="w-full space-y-2 mb-12">
            <div className="w-full h-px bg-gold/50" />
            <div className="w-5/6 h-px bg-gold/50 mx-auto" />
            <div className="w-4/5 h-px bg-gold/50 mx-auto" />
            <div className="w-full h-px bg-gold/50" />
            <div className="w-3/4 h-px bg-gold/50 mx-auto" />
          </div>
          <h3 className="text-xl font-sans text-center">SIDEBAR<br/>STUFF<br/><span className="text-sm text-gold-light">(NOT SCALED)</span></h3>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[40px] left-0 w-full px-10 flex items-end justify-between">
          <div className="flex gap-4">
            <Link to="/privacy" className="w-24 h-24 rounded-[50%] border border-gold flex flex-col items-center justify-center gap-2 hover:bg-gold hover:text-navy transition-colors">
              <Lock size={16} />
              <span>Privacy</span>
            </Link>
            <Link to="/socials" className="w-24 h-24 rounded-[50%] border border-gold flex flex-col items-center justify-center gap-2 hover:bg-gold hover:text-navy transition-colors">
              <Instagram size={16} />
              <span>Socials</span>
            </Link>
          </div>

          <div className="text-center mb-4">
            <p className="text-2xl font-sans mb-2">© OBLIQUE 2024</p>
            <p className="text-lg font-sans text-gold-light">CHAOS ENGAGEMENT</p>
          </div>

          <div className="flex items-center border border-gold rounded-full px-4 py-2 w-64 mb-4">
            <span className="text-gold mr-2">Search</span>
            <input type="text" className="bg-transparent border-none outline-none flex-1 text-gold placeholder-gold/50" />
            <button className="text-gold hover:text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Bottom right corner star/sparkle */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gold/20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />

      </div>
    </div>
  );
}
