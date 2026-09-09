'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Briefcase, Store, LayoutDashboard } from 'lucide-react'
import { DecryptText } from '@/components/ui/decrypt-text'
import ProjectCard from '@/components/sections/ProjectCard'

const projects = [
  {
    title: 'POS — Management Console',
    subtitle: 'Admin & Operations Dashboard',
    icon: LayoutDashboard,
    color: '#06b6d4',
    gradient: 'from-cyan-primary/10 to-transparent',
    description:
      'Admin console for the POS platform — a separate codebase from the cashier terminal. Handles menu & inventory, procurement, staff, tax compliance, and live sales analytics across branches.',
    highlights: [
      'Live revenue analytics dashboard with KPI tracking — profit margin, average order value, sales trends',
      'Menu, recipe, and multi-branch inventory management with AI menu scan and bulk Excel/CSV import',
      'FBR/PRA digital tax compliance integration alongside detailed orders and sales reporting',
    ],
    tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
    featured: true,
    previewUrl: 'pos-management.local',
    images: [
      { src: '/projects/pos/management-1.png', label: 'Revenue Analytics', group: 'Analytics' },
      { src: '/projects/pos/management-2.png', label: 'Menu Management', group: 'Menu' },
      { src: '/projects/pos/management-3.png', label: 'Orders Report', group: 'Reports' },
      { src: '/projects/pos/management-4.png', label: 'Tax Compliance (FBR/PRA)', group: 'Compliance' },
    ],
  },
  {
    title: 'POS — Cashier Terminal',
    subtitle: 'Offline-First PWA',
    icon: Store,
    color: '#22c55e',
    gradient: 'from-green-primary/10 to-transparent',
    description:
      'Touch-friendly point-of-sale terminal for in-store checkout — its own codebase, built as an offline-first PWA so cashiers can keep selling through connectivity drops.',
    highlights: [
      'Offline-first PWA — orders queue locally via Dexie.js/IndexedDB and sync automatically when back online',
      'Category-based selling grid with a live multi-channel order board (dine-in, take-away, delivery)',
      'Split payments, kitchen + customer ticket printing, and end-of-shift cash drawer reconciliation',
    ],
    tech: ['React.js', 'Redux', 'PWA', 'Dexie.js', 'IndexedDB', 'Node.js', 'REST APIs'],
    featured: true,
    previewUrl: 'pos-cashier.local',
    offline: true,
    images: [
      { src: '/projects/pos/cashier-1.png', label: 'Selling Grid', group: 'Selling' },
      { src: '/projects/pos/cashier-2.png', label: 'Live Order Board', group: 'Orders' },
      { src: '/projects/pos/cashier-3.png', label: 'Kitchen & Customer Tickets', group: 'Tickets' },
      { src: '/projects/pos/cashier-4.png', label: 'Split Payment', group: 'Payment' },
    ],
  },
  {
    title: 'JobHunter AI',
    subtitle: 'Autonomous Job-Search Assistant',
    icon: Briefcase,
    color: '#22c55e',
    gradient: 'from-green-primary/10 to-transparent',
    description:
      'Upload a CV, describe what you want, and it searches LinkedIn, Indeed, Glassdoor, Wellfound, and the open web in one pass, filters out closed/fake listings, and scores each job against your resume with Gemini.',
    highlights: [
      'Multi-source parallel search with closed/ghost-listing and search-index-page filtering',
      'Location verification and cross-board deduplication to kill wrong-city and duplicate results',
      'Gemini match scoring with culture-fit read and on-demand tailored resume-bullet suggestions',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Vitest'],
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Online Shopping',
    icon: ShoppingCart,
    color: '#06b6d4',
    gradient: 'from-cyan-primary/10 to-transparent',
    description:
      'Responsive e-commerce website with product catalogs, cart management, checkout flows, and payment gateway integration.',
    highlights: [
      'Responsive product catalog with cart and checkout functionality',
      'Payment gateway integration and dynamic order management UI',
      'Secure API calls with optimized client-side database interactions',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'REST APIs'],
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-primary font-mono text-sm mb-2">{'// 04. projects'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <DecryptText text="Featured" /> <DecryptText text="Projects" className="text-cyan-primary" />
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
