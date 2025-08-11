"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

// Dummy data matching the screenshot exactly
const activeProjects = [
  {
    id: 1,
    title: "Shopify Website",
    service: "Website Design",
    status: "In Progress",
    teamMember: {
      name: "John Raphael",
      role: "Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=JR",
    },
    progress: 70,
  },
  {
    id: 2,
    title: "Shopify Website",
    service: "Website Design",
    status: "Awaiting your approval",
    teamMember: {
      name: "John & Pelumi",
      role: "Designers",
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
    },
    progress: 60,
  },
  {
    id: 3,
    title: "Shopify Website",
    service: "Website Design",
    status: "Revisions",
    teamMember: {
      name: "John Raphael",
      role: "Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=JR",
    },
    progress: 70,
  },
]

const pastProjects = [
  {
    id: 4,
    title: "Shopify Website",
    service: "Website Design",
    status: "Delivered",
    teamMember: {
      name: "John Raphael",
      role: "Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=JR",
    },
    progress: 100,
  },
  {
    id: 5,
    title: "Shopify Website",
    service: "Website Design",
    status: "Cancelled",
    teamMember: {
      name: "John & Pelumi",
      role: "Designers",
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
    },
    progress: 100,
  },
  {
    id: 6,
    title: "Shopify Website",
    service: "Website Design",
    status: "Delivered",
    teamMember: {
      name: "John Raphael",
      role: "Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=JR",
    },
    progress: 100,
  },
  {
    id: 7,
    title: "Shopify Website",
    service: "Website Design",
    status: "Delivered",
    teamMember: {
      name: "John Raphael",
      role: "Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=JR",
    },
    progress: 100,
  },
  {
    id: 8,
    title: "Shopify Website",
    service: "Website Design",
    status: "Cancelled",
    teamMember: {
      name: "John & Pelumi",
      role: "Designers",
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
    },
    progress: 100,
  },
  {
    id: 9,
    title: "Shopify Website",
    service: "Website Design",
    status: "Delivered",
    teamMember: {
      name: "John Raphael",
      role: "Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=JR",
    },
    progress: 100,
  },
]

interface ProjectCardProps {
  project: {
    id: number
    title: string
    service: string
    status: string
    teamMember: {
      name: string
      role: string
      avatar: string
    }
    progress: number
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 cursor-pointer">
      {/* Header with title and chevron */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>

      {/* Service */}
      <div className="mb-2">
        <span className="text-sm text-gray-500">Service: </span>
        <span className="text-sm text-gray-900">{project.service}</span>
      </div>

      {/* Status */}
      <div className="mb-4">
        <span className="text-sm text-gray-500">Status: </span>
        <span className="text-sm text-gray-900 border border-gray-300 px-2 py-0.5 rounded">
          {project.status}
        </span>
      </div>

      {/* Team member */}
      <div className="flex items-center gap-2 mb-3">
        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center">
          <Image
            src={project.teamMember.avatar || "/placeholder.svg"}
            alt={project.teamMember.name}
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{project.teamMember.name}</p>
          <p className="text-xs text-gray-500">{project.teamMember.role}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        <div className="relative w-5 h-5">
          <svg className="w-5 h-5 transform -rotate-90" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" stroke="#e5e7eb" strokeWidth="2" fill="none" />
            <circle
              cx="10"
              cy="10"
              r="8"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 8}`}
              strokeDashoffset={`${2 * Math.PI * 8 * (1 - project.progress / 100)}`}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="text-sm text-gray-600">{project.progress}% complete.</span>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Active Projects Section */}
      <section>
        <h1 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
          Your Active Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Past Projects Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
          Past Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

//created by Omodara Ayodele
//github: OmodaraAyo
