import { FloatingCard } from "@/components/FloatingCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-7xl">
          <div className="relative pt-32 md:pt-44">
            <h1 className="text-center text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
              Creative Developer
              <span className="relative whitespace-nowrap">
                <span className="relative text-blue-600"> & Designer</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
              Building beautiful digital experiences with modern technologies and a keen eye for design.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="rounded-full">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute -bottom-32 left-1/2 flex -translate-x-1/2 gap-6">
          <FloatingCard className="h-64 w-64 animate-float">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Project 1"
              className="h-full w-full object-cover"
            />
          </FloatingCard>
          <FloatingCard className="h-64 w-64 animate-float [animation-delay:200ms]">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Project 2"
              className="h-full w-full object-cover"
            />
          </FloatingCard>
          <FloatingCard className="h-64 w-64 animate-float [animation-delay:400ms]">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Project 3"
              className="h-full w-full object-cover"
            />
          </FloatingCard>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-5xl">About Me</h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
            I'm a passionate developer and designer with a love for creating beautiful, functional websites and applications.
            With expertise in modern web technologies, I bring ideas to life through clean code and stunning design.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-5xl">Featured Projects</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <FloatingCard key={i} className="group cursor-pointer">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`}
                    alt={`Project ${i}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Project Title {i}</h3>
                <p className="mt-2 text-slate-600">A brief description of the project and the technologies used.</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-5xl">Get in Touch</h2>
          <FloatingCard className="mx-auto mt-16 max-w-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
};

export default Index;