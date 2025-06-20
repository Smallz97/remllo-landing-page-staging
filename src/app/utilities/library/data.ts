import { StackedBoxes, AfricanMap, FileIcon, UploadIcon, CheckIcon } from "@/app/utilities/library/Icons";

const navLinks = [
  { label: "Why It Matters", href: "#why-it-matters" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Early Validation", href: "#what-we-are-doing" },
];

const productUses = [
  {
    className: "bg-sky-950",
    illustration: StackedBoxes,
    heading: "Compliance is messy. Remllo brings the structure.",
    text:
      "Tired of scattered regulations and unclear responsibilities? Our platform organises everything into trackable tasks with clear ownership.",
  },
  {
    className: "bg-blue-700",
    illustration: AfricanMap,
    heading: "Built for African businesses. Designed for teams who care about trust.",
    text:
      "We understand the unique regulatory landscape of Africa. Our platform adapts to your specific business needs and local regulations.",
  },
];

const complianceChallenges = [
    {
        title: "Scattered regulations",
        description: "You're juggling NDPA, CBN, NCC, and every update lives in a PDF",
    },
    {
        title: "Unclear ownership",
        description: "Your team doesn't know who owns what compliance task",
    },
    {
        title: "Fragmented evidence",
        description: "Evidence is scattered across 10 different tools",
    },
    {
        title: "Audit paralysis",
        description: "One audit request can bring your operations to a halt",
    },
];

const workflowSteps = [
  {
    step: 1,
    icon: FileIcon,
    title: "Choose your regulations",
    description:
      "Select from our library of pre-configured regulatory frameworks or customize based on your specific business needs.",
  },
  {
    step: 2,
    icon: UploadIcon,
    title: "Upload your docs or let us suggest what you need",
    description:
      "Our AI analysis suggests what you need based on your business requirements.",
  },
  {
    step: 3,
    icon: CheckIcon,
    title: "Stay audit-ready",
    description:
      "Get mapped tasks, assign and upload evidence, and always be prepared for compliance audits",
  },
];

const expertInsights = [
  {
    title: "Talking to the experts",
    description:
      "Ongoing conversations with compliance professionals, lawyers, and operators shaping our understanding.",
  },
  {
    title: "Validated across industries",
    description:
      "Our approach has been tested and refined through collaboration with fintech companies and digital operations teams.",
  },
  {
    title: "MVP in progress",
    description:
      "Join us early and shape the product as we build our minimum viable product with early partners.",
  },
];

export { navLinks, productUses, workflowSteps, complianceChallenges, expertInsights };