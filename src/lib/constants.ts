export const siteConfig = {
  name: "ROBOTOPIA",
  title: "ROBOTOPIA — Physical AI Infrastructure",
  description:
    "Building the next generation Physical AI infrastructure for embodied intelligence.",
  heroDescription:
    "ROBOTOPIA is developing foundational technologies that enable robots to understand, reason about, and interact with the physical world. By integrating data, models, and robotic systems, we are building the infrastructure for the next generation of embodied intelligence.",
  url: "https://robotopia-ai.com",
  email: "hr@robotopia-ai.com",
  marketEmail: "hr@robotopia-ai.com",
  hrEmail: "hr@robotopia-ai.com",
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

export const openRoles = [
  "World Models",
  "Reinforcement Learning",
  "Robotics Software",
  "Perception",
  "Mechanical Design",
  "Full-Stack Engineering",
] as const;
