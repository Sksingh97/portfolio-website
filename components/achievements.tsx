"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { useSoundContext } from "./sound-provider"

interface Achievement {
  id: number
  title: string
  description: string
  year: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Serverless Training",
    description: "Completed comprehensive serverless architecture training from Amazon",
    year: "May 2024",
  },
]

export default function Achievements() {
  const { playHover } = useSoundContext()

  return (
    <section id="achievements" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-6 group"
              onMouseEnter={playHover}
            >
              <div className="flex items-start p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-muted hover:border-primary/50 transition-colors duration-300">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

