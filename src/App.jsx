import { useState, useEffect } from 'react';

/* ── Icon Components ── */
const ReactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
);

const NodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 9.12l6 3.33v6.37l-6-3.33V9.12zm8 9.7v-6.37l6-3.33v6.37l-6 3.33z" />
    </svg>
);

const TailwindIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.5 12 7 12z" />
    </svg>
);

const ExpressIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.511 4.86 3.556-4.86a1.466 1.466 0 0 1 1.802-.708L18.4 10.93l-4.865 6.63a1.595 1.595 0 0 0 1.9-.665L18.4 10.93zM0 6.25h3.795l2.79 7.764.276.868.276-.868L9.93 6.25h3.626l-5.594 13.12a5.192 5.192 0 0 1-1.386 2.132A3.403 3.403 0 0 1 4.253 22.5l-2.59-.574.483-2.167 1.87.435a1.587 1.587 0 0 0 1.186-.283c.305-.255.558-.6.76-1.033L0 6.25z" />
    </svg>
);

/* ── Tech Stack Data ── */
const techStack = [
    {
        name: 'React',
        description: 'Declarative component-based UI library for building interactive user interfaces.',
        icon: ReactIcon,
        color: 'from-cyan-400 to-blue-500',
        glow: 'shadow-cyan-500/20',
    },
    {
        name: 'Node.js',
        description: 'Server-side JavaScript runtime built on Chrome\'s V8 engine.',
        icon: NodeIcon,
        color: 'from-green-400 to-emerald-500',
        glow: 'shadow-green-500/20',
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapidly building custom designs.',
        icon: TailwindIcon,
        color: 'from-sky-400 to-indigo-500',
        glow: 'shadow-sky-500/20',
    },
    {
        name: 'Express.js',
        description: 'Fast, minimal, and flexible Node.js web application framework.',
        icon: ExpressIcon,
        color: 'from-yellow-400 to-orange-500',
        glow: 'shadow-yellow-500/20',
    },
];

const features = [
    {
        emoji: '🐳',
        title: 'Docker Ready',
        description: 'Comes with a production-grade multi-stage Dockerfile for effortless containerization.',
    },
    {
        emoji: '🚀',
        title: 'Coolify Deploy',
        description: 'Push to GitHub, connect to Coolify, and your app is live in minutes.',
    },
    {
        emoji: '⚡',
        title: 'Vite Powered',
        description: 'Lightning-fast HMR in development and optimized production builds.',
    },
    {
        emoji: '🎨',
        title: 'Tailwind Styled',
        description: 'Beautiful, responsive design with utility-first CSS — no bloat.',
    },
    {
        emoji: '🔒',
        title: 'Production Express',
        description: 'Express.js serves your built assets with caching and compression ready.',
    },
    {
        emoji: '📱',
        title: 'Fully Responsive',
        description: 'Looks great on any device — phones, tablets, and desktops.',
    },
];

/* ── Intersection Observer Hook ── */
function useInView(ref, options = {}) {
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.15, ...options });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return isInView;
}

/* ── Section Wrapper ── */
function AnimatedSection({ children, className = '' }) {
    const ref = { current: null };
    const setRef = (el) => { ref.current = el; };
    const isInView = useInView(ref);
    return (
        <div ref={setRef} className={`${className} transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
}

/* ── Navbar ── */
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : ''}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        T
                    </div>
                    <span className="font-bold text-lg text-white">TestSite</span>
                </a>
                <div className="hidden sm:flex items-center gap-8">
                    <a href="#stack" className="text-sm text-gray-400 hover:text-white transition-colors">Stack</a>
                    <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                        GitHub ↗
                    </a>
                </div>
            </div>
        </nav>
    );
}

/* ── Hero Section ── */
function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl animate-glow-pulse delay-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Ready for Coolify Deployment
                    </div>
                </div>

                <h1 className="animate-slide-up delay-100 text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                    <span className="text-white">Modern Web</span>
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                        Full Stack
                    </span>
                </h1>

                <p className="animate-slide-up delay-200 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    A clean, production-ready one-pager powered by{' '}
                    <span className="text-cyan-400 font-medium">React</span>,{' '}
                    <span className="text-sky-400 font-medium">Tailwind CSS</span>,{' '}
                    <span className="text-yellow-400 font-medium">Express.js</span>, and{' '}
                    <span className="text-green-400 font-medium">Node.js</span>.
                    Deploy to Coolify in minutes.
                </p>

                <div className="animate-slide-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#stack" className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:shadow-2xl hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5">
                        Explore Stack
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a href="#features" className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5">
                        View Features
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
            </div>
        </section>
    );
}

/* ── Tech Stack Section ── */
function TechStack() {
    return (
        <section id="stack" className="relative py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection className="text-center mb-16">
                    <p className="text-sm uppercase tracking-widest text-violet-400 font-semibold mb-3">Technologies</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Built With the Best</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Four powerful technologies working together to deliver a fast, modern, and scalable web application.</p>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((tech, i) => (
                        <AnimatedSection key={tech.name}>
                            <div
                                className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${tech.glow}`}
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} p-3 text-white mb-5 group-hover:scale-110 transition-transform`}>
                                    <tech.icon />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{tech.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Features Section ── */
function Features() {
    return (
        <section id="features" className="relative py-32 px-6">
            {/* Subtle bg glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto">
                <AnimatedSection className="text-center mb-16">
                    <p className="text-sm uppercase tracking-widest text-fuchsia-400 font-semibold mb-3">Why This Stack</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Everything You Need</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">From development to deployment, this boilerplate has you covered.</p>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <AnimatedSection key={feature.title}>
                            <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                                <div className="text-3xl mb-4">{feature.emoji}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Deploy CTA Section ── */
function DeployCTA() {
    return (
        <section className="py-32 px-6">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
                <div className="relative p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 border border-white/[0.08] overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Deploy?</h2>
                        <p className="text-gray-400 max-w-lg mx-auto mb-8">
                            Push this repository to GitHub, connect it to Coolify, and your site goes live automatically.
                        </p>

                        <div className="bg-gray-900/80 backdrop-blur rounded-xl p-4 max-w-md mx-auto mb-8 border border-white/5">
                            <code className="text-sm font-mono text-gray-300">
                                <span className="text-gray-500">$</span>{' '}
                                <span className="text-green-400">git push</span>{' '}
                                <span className="text-gray-400">origin main</span>
                            </code>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                Auto-build
                            </span>
                            <span className="text-gray-700">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                SSL included
                            </span>
                            <span className="text-gray-700">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                Zero downtime
                            </span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}

/* ── Footer ── */
function Footer() {
    return (
        <footer className="border-t border-white/5 py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs">
                        T
                    </div>
                    <span className="text-sm text-gray-500">TestSite © {new Date().getFullYear()}</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>React</span>
                    <span className="text-gray-700">·</span>
                    <span>Tailwind</span>
                    <span className="text-gray-700">·</span>
                    <span>Express</span>
                    <span className="text-gray-700">·</span>
                    <span>Node.js</span>
                </div>
            </div>
        </footer>
    );
}

/* ── Main App ── */
export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <TechStack />
            <Features />
            <DeployCTA />
            <Footer />
        </div>
    );
}
