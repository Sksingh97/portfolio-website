import type { Metadata } from "next"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import SoundProvider from "@/components/sound-provider"
import ScrollProgress from "@/components/scroll-progress"
import PersonalDetails from "@/components/personal-details"

export const metadata: Metadata = {
  title: "Sudhanshu Kumar Singh | Senior Software Engineer",
  description:
    "Portfolio of Sudhanshu Kumar Singh, a software engineer with 8 years of experience in software development, system architecture, and cloud-based solutions.",
}

export default function Home() {
  return (
    <SoundProvider>
      <main className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <PersonalDetails />
        <Contact />
      </main>
    </SoundProvider>
  )
}

