export const siteConfig = {
  name: "ROBOTOPIA",
  title: "ROBOTOPIA — Physical AI Infrastructure",
  description:
    "Building the next generation Physical AI infrastructure for embodied intelligence.",
  heroDescription:
    "ROBOTOPIA is developing foundational technologies that enable robots to understand, reason about, and interact with the physical world. By integrating data, models, and robotic systems, we are building the infrastructure for the next generation of embodied intelligence.",
  url: "https://needrepair.github.io/ROBOTOPIA.ai",
  email: "linsy25@m.fudan.edu.cn",
  tagline: "Building Physical AI Infrastructure for the Real World.",
  address: {
    line1: "Shanghai Future Intelligence Center",
    line2: "Shanghai, China",
  },
} as const;

export const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Technology", href: "#technology" },
  { label: "Platform", href: "#platform" },
  { label: "Team", href: "#team" },
  { label: "Careers", href: "#careers" },
] as const;

export const technologyCards = [
  {
    title: "Data",
    description:
      "Building scalable systems for collecting high-quality interaction data from the physical world.",
  },
  {
    title: "World Models",
    description:
      "Developing foundation models capable of understanding physical environments, object interactions, and task execution.",
  },
  {
    title: "Embodied Platform",
    description:
      "Creating integrated robotic platforms that bridge perception, planning, and real-world execution.",
  },
] as const;

export const teamMembers = [
  {
    name: "Siyu Lin",
    role: "Founder & CEO",
    bio: "Full-stack embodied AI systems, robotics engineering, company strategy, and real-world deployment.",
    detail:
      "Led the development of multiple embodied AI systems from concept to demonstration, with experience spanning perception, control, sensing, data collection, and robotic system integration.",
  },
  {
    name: "Dr. W",
    role: "Co-Founder & CTO",
    bio: "World models, robot learning, UMI data collection systems, VLA/WAM pretraining, and large-scale embodied AI infrastructure.",
    detail:
      "Focused on building scalable learning systems that connect data, simulation, and real-world robotic execution.",
  },
  {
    name: "Dong Wen",
    role: "COO",
    bio: "Operations, supply chain, industrialization, business development, and commercialization.",
    detail:
      "Extensive experience in technology operations, manufacturing ecosystems, and bringing advanced technologies into real-world applications.",
  },
  {
    name: "Prof. Fuyanwei",
    role: "Chief Scientist",
    bio: "Causal representation learning, object-centric learning, 3D vision, and embodied intelligence.",
    detail:
      "Leading researcher in machine learning and computer vision, with long-term contributions to causal reasoning, visual representation learning, and intelligent systems.",
  },
] as const;

export const openRoles = [
  "World Models",
  "Reinforcement Learning",
  "Robotics Software",
  "Perception",
  "Mechanical Design",
  "Full-Stack Engineering",
] as const;
