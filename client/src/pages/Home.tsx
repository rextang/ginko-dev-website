import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ginkgoLeaf from "@/assets/images/ginkgo-leaf.png";
import { Network, Server, GitMerge, Users } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  );

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Calculate rotation based on mouse position relative to center
  const rotateX = useTransform(
    smoothY,
    [0, typeof window !== "undefined" ? window.innerHeight : 1000],
    [20, -20],
  );
  const rotateY = useTransform(
    smoothX,
    [0, typeof window !== "undefined" ? window.innerWidth : 1000],
    [-20, 20],
  );

  return (
    <main className="relative h-screen w-full bg-background overflow-hidden selection:bg-primary/30 text-foreground">
      {/* Ambient background noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Center Background Text GINKO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 translate-y-43 translate-x-2">
        <h1 className="text-9xl font-display font-bold text-foreground/8 tracking-tighter mix-blend-overlay uppercase select-none">
          GINKO
        </h1>
      </div>

      {/* Central Ginkgo Leaf, Subtitle, and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 translate-y-20">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
          className="relative w-64 h-64 md:w-[26rem] md:h-[26rem]"
        >
          {/* Subtle glow behind leaf */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-125 pointer-events-none" />

          <img
            src={ginkgoLeaf}
            alt="Ginkgo Leaf"
            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(250,204,21,0.2)] filter brightness-110 saturate-150 relative z-10"
          />
        </motion.div>

        {/* Texts close to the root of the leaf */}
        <div className="flex flex-col items-center z-30 -mt-5">
          <p className="text-primary tracking-[0.3em] text-xs md:text-sm font-medium uppercase drop-shadow-md translate-x-3">
            Software Development Studio
          </p>

          <div className="mt-8 md:mt-12 pointer-events-auto">
            <a
              href="mailto:hello@ginkodev.com"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* 2x2 Grid for the 4 corners */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 z-30 pointer-events-none">
        {/* Top Left: Telecom Excellence */}
        <div className="group relative flex items-start justify-start p-6 md:p-12 lg:p-16 pointer-events-auto border-none">
          <div className="relative max-w-[320px] p-4 -m-4">
            {/* Cloud shape shadow for the intro text ONLY */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 blur-[40px] rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-56 h-40 bg-primary/20 blur-[40px] rounded-[100px]" />
              <div className="absolute top-4 -right-12 w-40 h-40 bg-primary/20 blur-[40px] rounded-full" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center border border-primary/20 backdrop-blur-md text-primary">
                  <Network className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-display font-bold tracking-tight relative inline-block pb-1">
                  Telecom Excellence
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </h2>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Deep expertise in telecommunications including, 5G networks, and
                carrier-grade systems. We architect solutions that power global
                connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Top Right: Enterprise Solutions */}
        <div className="group relative flex items-start justify-end text-right p-6 md:p-12 lg:p-16 pointer-events-auto border-none">
          <div className="relative max-w-[320px] flex flex-col items-end p-4 -m-4">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-[40px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-56 h-40 bg-primary/20 blur-[40px] rounded-[100px]" />
              <div className="absolute top-4 -left-12 w-40 h-40 bg-primary/20 blur-[40px] rounded-full" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-end gap-3 mb-4">
                <h2 className="text-2xl font-display font-bold tracking-tight relative inline-block pb-1">
                  Enterprise Solutions
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </h2>
                <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center border border-primary/20 backdrop-blur-md text-primary">
                  <Server className="w-5 h-5" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Custom software platforms that scale with your business. From
                cloud-native architectures to legacy system modernization, we
                deliver enterprise-grade results.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left: Full-Cycle Development */}
        <div className="group relative flex items-end justify-start p-6 md:p-12 lg:p-16 pointer-events-auto border-none">
          <div className="relative max-w-[320px] p-4 -m-4">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 blur-[40px] rounded-full" />
              <div className="absolute -top-10 -right-10 w-56 h-40 bg-primary/20 blur-[40px] rounded-[100px]" />
              <div className="absolute bottom-4 -right-12 w-40 h-40 bg-primary/20 blur-[40px] rounded-full" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center border border-primary/20 backdrop-blur-md text-primary">
                  <GitMerge className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-display font-bold tracking-tight relative inline-block pb-1">
                  Full-Cycle Development
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </h2>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                From ideation to deployment and beyond. Our agile teams handle
                everything: UX/UI design, backend systems, mobile apps, DevOps,
                and customer support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right: Technology Partners */}
        <div className="group relative flex items-end justify-end text-right p-6 md:p-12 lg:p-16 pointer-events-auto border-none">
          <div className="relative max-w-[320px] flex flex-col items-end p-4 -m-4">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-[40px] rounded-full" />
              <div className="absolute -top-10 -left-10 w-56 h-40 bg-primary/20 blur-[40px] rounded-[100px]" />
              <div className="absolute bottom-4 -left-12 w-40 h-40 bg-primary/20 blur-[40px] rounded-full" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-end gap-3 mb-4">
                <h2 className="text-2xl font-display font-bold tracking-tight relative inline-block pb-1">
                  Technology Partners
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </h2>
                <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center border border-primary/20 backdrop-blur-md text-primary">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                We become an extension of your team. Strategic consulting,
                technical leadership, and hands-on development to accelerate
                your digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
