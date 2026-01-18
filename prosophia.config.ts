import { defineConfig } from '@prosophia/personal-portfolio';

export default defineConfig({
  site: {
    name: "Modern Portfolio",
    tagline: "Researcher & Developer",
  },
  theme: {
    primaryColor: "#18181b",
    accentColor: "#f59e0b",
    fonts: {
      heading: "Outfit",
      body: "Inter",
    },
  },
  features: {
    projects: true,
    blog: true,
    contact: true,
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "",
    linkedin: "",
    twitter: "",
  },
});
