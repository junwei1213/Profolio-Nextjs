"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Experience } from "@/types/portfolio"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Card>
      <CardHeader>
        <CardTitle>{experience.company}</CardTitle>
        <CardDescription>
          {experience.role} | {experience.period}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

export default ExperienceCard

