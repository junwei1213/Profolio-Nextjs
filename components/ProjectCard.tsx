"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Project } from "@/types/portfolio"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="secondary" className="mr-2 mb-2">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground">{project.details}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default ProjectCard

