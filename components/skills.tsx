"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useSoundContext } from "./sound-provider"

interface SkillCategory {
  name: string
  skills: Skill[]
}

interface Skill {
  name: string
  level: number // 1-10
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Node.js", level: 9 },
      { name: "JavaScript", level: 9 },
      { name: "TypeScript", level: 8 },
      { name: "Go", level: 8 },
      { name: "Python", level: 8 },
      { name: "React", level: 9 },
      { name: "React Native", level: 7 },
      { name: "AngularJS", level: 7 },
      { name: "C++", level: 6 },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS Services", level: 9 },
      { name: "Azure Services", level: 8 },
      { name: "Docker", level: 9 },
      { name: "CI/CD Pipelines", level: 8 },
      { name: "Jenkins", level: 7 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 9 },
      { name: "MongoDB", level: 8 },
      { name: "MySQL", level: 7 },
    ],
  },
  {
    name: "Core Competencies",
    skills: [
      { name: "System Architecture", level: 9 },
      { name: "Software Development", level: 9 },
      { name: "Requirement Gathering", level: 8 },
      { name: "System Design", level: 8 },
      { name: "Project Management", level: 7 },
      { name: "Team Building", level: 8 },
      { name: "Performance Optimization", level: 8 },
      { name: "Microservices", level: 9 },
      { name: "Serverless Computing", level: 8 },
    ],
  },
]

export default function Skills() {
  const { playHover } = useSoundContext()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create a grid of dots
    const drawGrid = () => {
      if (!ctx) return

      const dotSize = 1
      const spacing = 20
      const xCount = Math.floor(canvas.width / spacing)
      const yCount = Math.floor(canvas.height / spacing)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let x = 0; x < xCount; x++) {
        for (let y = 0; y < yCount; y++) {
          const xPos = x * spacing
          const yPos = y * spacing

          ctx.fillStyle = "rgba(100, 100, 255, 0.2)"
          ctx.beginPath()
          ctx.arc(xPos, yPos, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section id="skills" className="py-20 relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />

      <div className="container relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Core Competencies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-muted"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                    onMouseEnter={playHover}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

