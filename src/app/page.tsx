import Image from "next/image";
import Link from "next/link";
import { 
  Play, Menu, Twitter, FileText as Scroll, FileDown, RefreshCw, StickyNote, ChevronLeft, ChevronRight, Youtube
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-800 py-4">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-emerald-600 rounded-full"></div>
            <Link className="font-bold text-xl text-slate-100" href="/">Cash Cleaner Simulator</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#gameplay">
              <Scroll className="mr-2 h-4 w-4" />Game Guide
            </Link>
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#download">
              <FileDown className="mr-2 h-4 w-4" />Download
            </Link>
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#updates">
              <RefreshCw className="mr-2 h-4 w-4" />News & Updates
            </Link>
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#blog">
              <StickyNote className="mr-2 h-4 w-4" />Dev Blog
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button id="mobile-menu-button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-slate-700 hover:text-white h-9 w-9 md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="text-slate-100" />
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-slate-800 border-t border-slate-700/50">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#gameplay">Game Guide</Link>
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#download">Download</Link>
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#updates">News & Updates</Link>
            <Link className="flex items-center text-slate-300 hover:text-white hover:bg-slate-700 hover:rounded-md p-1 transition-all duration-200 ease-in-out" href="#blog">Dev Blog</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="title">Cash Cleaner Simulator: Get Rich or Get... Clean!</h1>
              <p className="text-slate-600 mb-6">Welcome to the most satisfying job simulator you never knew you wanted! Grab your gloves, turn up the music, and get ready to clean, sort, and pack stacks of dirty money. It&apos;s part oddly satisfying cleaning sim, part fever dream. And yes, every single banknote is physics-simulated!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#features-section" className="btn-primary">Discover Key Features</Link>
                <Link href="https://store.steampowered.com" target="_blank">
                  <button className="btn-secondary w-full sm:w-auto">Buy on Steam</button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                <button id="play-trailer-button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-white h-16 w-16 rounded-full bg-emerald-600/80 backdrop-blur-sm text-white hover:bg-emerald-700">
                  <Play />
                  <span className="sr-only">Play Cash Cleaner Simulator Trailer</span>
                </button>
              </div>
              <Image 
                src="https://placehold.co/1200x675/2c3e50/FFFFFF?text=Cash+Cleaner+Simulator+Trailer"
                alt="Cash Cleaner Simulator Trailer"
                fill
                style={{objectFit: 'cover'}}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="flex flex-col items-center gap-4 container mx-auto">
          <div className="w-full max-w-4xl flex flex-col justify-center items-center text-center">
            <h2 className="subtitle">Cash Cleaner Gallery: A Glimpse into the Action!</h2>
            <p className="text-sm text-slate-600">Take a peek at the satisfying (and sometimes messy) world of Cash Cleaner Simulator. Browse screenshots of the cleaning process, tools, and your workspace.</p>
          </div>
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-slate-300">
            <Image
              id="gallery-main-image"
              alt="Selected Cash Cleaner Simulator image"
              src="https://placehold.co/1200x675/4c9f70/FFFFFF?text=Gallery+Image+1"
              fill
              style={{objectFit: 'cover'}}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex w-full max-w-4xl items-center gap-2">
            <button id="gallery-prev" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-400 bg-transparent shadow-sm hover:bg-slate-200 hover:text-slate-700 text-slate-600 h-9 w-9 shrink-0">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div id="gallery-thumbnails" className="flex flex-1 gap-2 overflow-x-auto py-2 scrollbar-hide">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="relative w-24 h-16 shrink-0 rounded overflow-hidden border-2 border-transparent hover:border-emerald-500 cursor-pointer">
                  <Image
                    src={`https://placehold.co/600x400/4c9f70/FFFFFF?text=Thumb+${num}`}
                    alt={`Screenshot ${num} thumbnail`}
                    fill
                    style={{objectFit: 'cover'}}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
            <button id="gallery-next" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-slate-400 bg-transparent shadow-sm hover:bg-slate-200 hover:text-slate-700 text-slate-600 h-9 w-9 shrink-0">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="py-12 md:py-16 mx-4 bg-slate-700 text-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Art of Cleaning: Gameplay in Cash Cleaner Simulator</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">Step into the shoes of a specialist in a very particular field. Receive dubious deliveries, identify counterfeit bills, wash away dirt and... other stains. Use a variety of tools, upgrade your lab, and manage your clandestine operations. It&apos;s not just about cleaning; it&apos;s about efficiency, discretion, and maybe uncovering a few secrets along the way.</p>
            <div className="flex my-1 flex-wrap gap-2 justify-center mt-4">
              <Link className="text-sm p-2 rounded-full focus:outline-none focus:shadow-outline bg-sky-500/20 text-sky-300 hover:bg-sky-600/30" href="#tools">Tools of the Trade</Link>
              <Link className="text-sm p-2 rounded-full focus:outline-none focus:shadow-outline bg-emerald-500/20 text-emerald-300 hover:bg-emerald-600/30" href="#cleaning-process">The Cleaning Process</Link>
            </div>
          </div>
          <div className="relative grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="absolute inset-0 -z-10 ">
              <Image 
                alt="Cash Cleaner Gameplay Background"
                src="https://placehold.co/1200x675/2c3e50/FFFFFF?text=Background"
                fill
                style={{objectFit: 'cover'}}
                className="blur-sm opacity-50 w-full h-full"
              />
            </div>
            <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Mastering Your Tools: From Washers to Scanners</h3>
              <p className="mb-4 text-slate-200">Utilize a range of equipment: washing machines for bulk cleaning, dryers for that crisp finish, scanners to detect impurities, and specialized tools for unique challenges. Each job demands the right approach!</p>
              <Link href="#tools">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors shadow hover:bg-emerald-700 bg-emerald-600 p-2 h-auto font-medium text-white">Explore All Tools →</button>
              </Link>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image 
                alt="Cash Cleaning Action"
                src="https://placehold.co/600x400/4c9f70/FFFFFF?text=Cleaning+Action"
                fill
                style={{objectFit: 'cover'}}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16 bg-slate-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="subtitle">Key Features: What Makes Cash Cleaner Simulator So Satisfying</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">Cash Cleaner Simulator offers a unique blend of satisfying cleaning mechanics, quirky storytelling, and the thrill of managing your own underground enterprise.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="💸"
              title="Realistic Cash Physics"
              description="Every banknote and coin behaves with satisfyingly real physics. Stack it, sort it, watch it tumble!"
            />
            <FeatureCard 
              icon="🛠️"
              title="Tools of the Trade"
              description="From industrial washing machines and dryers to high-tech scanners and bill counters. Upgrade and expand your arsenal."
            />
            <FeatureCard 
              icon="📖"
              title="Engaging Story Mode"
              description="Unravel a narrative with multiple endings, shady clients, and unexpected twists. How did you get here? Can you ever leave?"
            />
            <FeatureCard 
              icon="💎"
              title="Secrets & Cryptocurrency"
              description="Discover hidden easter eggs, unlock secret areas in your lab, and dabble in the volatile world of in-game cryptocurrencies."
            />
            <FeatureCard 
              icon="🎶"
              title="Chill Lo-Fi Soundtrack"
              description="Clean to the beat of an original soundtrack featuring chilled-out lo-fi hip-hop tracks, available in-game and separately."
            />
            <FeatureCard 
              icon="🎨"
              title="Customize Your Hideout"
              description="Spend your hard-earned (clean) cash on decorative items and furniture to personalize your workspace."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-sky-600">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Start Your Cleaning Empire? Get Cash Cleaner Simulator!</h2>
            <Link href="#download">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow h-9 bg-emerald-600 hover:bg-emerald-700 text-white">Buy on Steam Now!</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16 bg-slate-900 text-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pro Cleaner Tips: Maximize Your Efficiency!</h2>
            <p className="text-slate-400 text-lg">Our community of cleaners has shared these top tips for getting the most out of your... operations.</p>
          </div>
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-slate-700/50 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <TipCard 
                number="1"
                title="Sort Before You Wash"
                description="Identify counterfeit or heavily damaged bills first. Some stains might need special pre-treatment before going into the washer!"
              />
              <TipCard 
                number="2"
                title="Mind the Dryer Settings"
                description="Over-drying can damage delicate bills. Find the optimal time and temperature for that perfect crispness without ruining your hard work."
              />
              <TipCard 
                number="3"
                title="Upgrade Wisely"
                description="Prioritize upgrades that significantly boost your throughput or unlock new cleaning capabilities based on the jobs you're taking."
              />
              <TipCard 
                number="4"
                title="Scanner is Your Friend"
                description="Don't just rely on your eyes. Use the scanner frequently to catch hidden markings, security features, or residual contaminants."
              />
              <TipCard 
                number="5"
                title="Explore Your Lab"
                description="Keep an eye out for hidden compartments or unusual items in your workspace. You never know what secrets (or extra storage) you might find."
              />
              <TipCard 
                number="6"
                title="Check Client Feedback"
                description="Pay attention to client requests and feedback. Happy clients mean more jobs and better rewards. Some have very specific demands!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="subtitle">Straight from the Launderette: Player Reviews</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">Cash Cleaner Simulator is making a splash! Here's what players are saying about their money cleaning adventures.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4 italic">"Incredibly satisfying gameplay loop! Watching those dirty bills come out sparkling clean is addictive."</p>
              <p className="font-semibold text-slate-800">- Steam User A</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4 italic">"The story mode is surprisingly engaging for a sim game. I need to know what happens next!"</p>
              <p className="font-semibold text-slate-800">- CleanerPro9000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4 italic">"Love the physics! Throwing stacks of cash around never gets old. The lo-fi beats are a perfect touch."</p>
              <p className="font-semibold text-slate-800">- MoneyMaestro</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4 italic">"The attention to detail in the cleaning process is fantastic. So many tools, so many ways to clean (or mess up!)."</p>
              <p className="font-semibold text-slate-800">- SudsSavvy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4 italic">"A must-buy for anyone who loves satisfying simulation games. The crypto mini-game is a fun distraction too!"</p>
              <p className="font-semibold text-slate-800">- BitWasher</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4 italic">"Found myself organizing virtual cash for hours. It's weirdly therapeutic. Highly recommend!"</p>
              <p className="font-semibold text-slate-800">- ZenCleaner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 bg-slate-700 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Join the Cash Cleaner Community</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Connect with fellow cleaners, share tips, discuss strategies, and stay updated on the latest game news and events. Follow us on our social channels!</p>
          <div className="flex justify-center gap-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-sky-500 hover:bg-sky-600 text-white h-10 px-6">
              <Twitter className="w-5 h-5" />
              Twitter
            </Link>
            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-indigo-500 hover:bg-indigo-600 text-white h-10 px-6">
              <FaDiscord className="w-5 h-5" />
              Discord
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-red-600 hover:bg-red-700 text-white h-10 px-6">
              <Youtube className="w-5 h-5" />
              YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions (FAQ)</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Got questions? We've got answers! Here's some common info about Cash Cleaner Simulator.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Q: What is the release date for Cash Cleaner Simulator?</h3>
              <p className="text-slate-700 leading-relaxed">A: Cash Cleaner Simulator was officially released on <strong className="text-emerald-600">May 8, 2025</strong>, for PC on Steam.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Q: How much does Cash Cleaner Simulator cost?</h3>
              <p className="text-slate-700 leading-relaxed">A: The base price for Cash Cleaner Simulator on Steam is <strong className="text-emerald-600">$14.99 USD</strong>. Prices may vary based on regional pricing, sales, or special offers. For example, there was an introductory offer of $13.49 USD.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Q: Is Cash Cleaner Simulator available on Android, Xbox, or PS5?</h3>
              <p className="text-slate-700 leading-relaxed">A: Currently, Cash Cleaner Simulator is officially available for <strong className="text-emerald-600">PC (Windows) via Steam</strong>. There is no official information at this time regarding a release on Android, Xbox, or PS5 platforms.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Q: Is there a demo for Cash Cleaner Simulator?</h3>
              <p className="text-slate-700 leading-relaxed">A: Yes, a <strong className="text-emerald-600">demo version</strong> of Cash Cleaner Simulator has been available, allowing players to try out game mechanics with a variety of equipment. Availability of demos can change, so it's best to check the official Steam page for the most current information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 text-center text-slate-400">
          <div className="mb-4">
            <div className="w-10 h-10 bg-emerald-600 rounded-full mx-auto mb-2"></div>
            <p className="text-lg font-semibold text-slate-100">Cash Cleaner Simulator</p>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaDiscord className="w-5 h-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <div className="text-sm mb-2">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link> |
            <Link href="/terms" className="hover:text-slate-200 transition-colors mx-2">Terms of Service</Link> |
            <Link href="/contact" className="hover:text-slate-200 transition-colors">Contact Us</Link>
          </div>
          <p className="text-xs">&copy; 2025 Cash Cleaner Simulator. All rights reserved. cashcleanerSimulator.org</p>
          <p className="text-xs mt-1">This is a fan community website. Cash Cleaner Simulator is developed by Mind Control Games and published by Forklift Interactive & Digital Pajamas.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

function TipCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mx-auto mb-6 relative z-10">
        <span className="text-2xl font-bold text-slate-100">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-slate-400 text-center">{description}</p>
    </div>
  );
}
