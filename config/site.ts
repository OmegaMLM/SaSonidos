export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sa Sonidos",
  description: "Disfruta tu fiesta",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    instagram: "https://www.instagram.com/sa.sonidos.multimedia?igsh=MTVqN212dzBkZzV1Yg==",
    facebook: "https://www.facebook.com/share/1GjDVn2j4D/?mibextid=wwXIfr",
  },
};
