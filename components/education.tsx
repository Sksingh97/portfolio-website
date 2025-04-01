"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black/30">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">B.Tech. in Computer Science</h3>
              <p className="text-muted-foreground">
                Mahatma Gandhi Mission College of Engineering and Technology, Noida
              </p>
              <p className="text-sm text-muted-foreground mt-1">Graduated 2018</p>

              <motion.div
                className="mt-4 p-4 bg-black/30 rounded-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-sm italic text-muted-foreground">
                  Studied computer science fundamentals, data structures, algorithms, software engineering principles,
                  and gained hands-on experience with various programming languages and technologies.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

