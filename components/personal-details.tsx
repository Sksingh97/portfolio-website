"use client"

import { motion } from "framer-motion"
import { Calendar, Globe, HomeIcon, PinIcon } from "lucide-react"

export default function PersonalDetails() {
  return (
    <section id="personal-details" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Personal Details
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p>4th February 1997</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Languages Known</p>
                <p>English</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <HomeIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>Greater Noida, India</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

