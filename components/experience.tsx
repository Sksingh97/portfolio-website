"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useSoundContext } from "./sound-provider"
import { cn } from "@/lib/utils"

interface ExperienceItem {
  id: number
  company: string
  position: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Dsilo",
    position: "Senior Software Engineer",
    period: "Nov 2024 – Mar 2025",
    description: [
      "Collaborated with cross-functional teams to design and implement microservices-based ETL pipeline on Azure",
      "Developed AI-driven applications using Node.js and Python, optimizing data ingestion and transformation",
      "Built AI-powered data pipelines integrating with Azure ML and Azure Cognitive Services",
      "Designed serverless ETL workflows using Azure Functions, Event Grid, and Service Bus",
      "Leveraged Azure Data Factory for ETL automation and Azure Synapse Analytics for data warehousing",
      "Led architecture and design of AI-driven data platforms ensuring scalability and reliability",
      "Provided technical guidance and mentorship to junior engineers",
    ],
  },
  {
    id: 2,
    company: "Funding Societies",
    position: "Software Engineer Lvl 4",
    period: "Jan 2023 – Nov 2024",
    description: [
      "Collaborated with cross-functional teams to design and implement microservices architecture",
      "Developed scalable web applications using Node.js, Go, and AngularJS",
      "Created solutions with serverless architecture using AWS Lambda, EventBridge, and SQS",
      "Led architecture and design of software systems ensuring scalability and maintainability",
      "Conducted thorough code reviews to ensure quality and compliance with standards",
      "Provided technical guidance and mentorship to junior team members",
      "Created comprehensive documentation for software designs and processes",
    ],
  },
  {
    id: 3,
    company: "Nagarro",
    position: "Senior Software Engineer",
    period: "Jul 2021 – Jan 2023",
    description: [
      "Deployed Azure Queue to streamline message processing and task management",
      "Led DNS management initiatives on Azure ensuring smooth domain name resolution",
      "Implemented SSL certificate integration on Azure to ensure secure communication",
      "Championed development and deployment of medical device solutions on Azure",
      "Utilized Azure's scalability and compliance features for optimal results",
    ],
  },
  {
    id: 4,
    company: "Algoworks",
    position: "Software Engineer",
    period: "May 2019 – Jul 2021",
    description: [
      "Managed migration of legacy data from outdated systems to modern infrastructure",
      "Led development of a pet veterinarian platform with curbside features for COVID-19 safety",
      "Utilized Twilio API to create interactive voice response (IVR) systems",
      "Pioneered a one-stop triage solution for pet medical emergencies",
      "Supported call handling and coordination for efficient crisis management",
    ],
  },
  {
    id: 5,
    company: "Morbus Technologies",
    position: "Software Engineer",
    period: "Nov 2018 – May 2019",
    description: [
      "Led development of an internal courier management tool optimizing logistics operations",
      "Collaborated with cross-functional teams to ensure timely deliveries",
      "Leveraged AWS services like EC2, Elastic IP, and RDS for scalable solutions",
      "Established automated deployment pipelines using Jenkins for continuous integration",
    ],
  },
  {
    id: 6,
    company: "Brahmashirsha Labs",
    position: "Software Engineer",
    period: "Apr 2017 – Oct 2018",
    description: [
      "Directed development of an IoT automation platform with MQTT protocol integration",
      "Incorporated Firebase for real-time notifications about appliance status",
      "Designed features to monitor and analyze power consumption for each appliance",
      "Optimized energy usage patterns and promoted sustainability",
    ],
  },
]

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<number>(1)
  const { playClick } = useSoundContext()

  const handleExperienceClick = (id: number) => {
    playClick()
    setActiveExperience(id)
  }

  return (
    <section id="experience" className="py-20 bg-black/30">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => handleExperienceClick(exp.id)}
                className={cn(
                  "px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300",
                  "border-b-2 lg:border-l-2 lg:border-b-0 border-muted",
                  "min-w-[200px] lg:min-w-0",
                  activeExperience === exp.id
                    ? "border-primary text-primary"
                    : "hover:border-primary/50 hover:text-primary/80",
                )}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeExperience === exp.id ? 1 : 0,
                  y: activeExperience === exp.id ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
                className={`${activeExperience === exp.id ? "block" : "hidden"}`}
              >
                <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                <p className="text-muted-foreground mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

