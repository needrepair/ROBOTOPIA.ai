export const siteConfig = {
  name: "ROBOTOPIA",
  title: "ROBOTOPIA — Physical AI Infrastructure",
  description:
    "Building the next generation Physical AI infrastructure for embodied intelligence.",
  url: "https://robotopia.ai",
  email: "contact@robotopia.ai",
  tagline: "Building Physical AI Infrastructure for the Real World.",
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
      "Collecting multimodal interaction data from the physical world.",
  },
  {
    title: "World Model",
    description:
      "Building foundation models capable of understanding and predicting physical interactions.",
  },
  {
    title: "Embodied Platform",
    description: "Deploying intelligence into real robotic systems.",
  },
] as const;

export const openRoles = [
  "World Models",
  "Reinforcement Learning",
  "Robotics Software",
  "Perception",
  "Mechanical Design",
  "Full Stack Engineering",
] as const;
