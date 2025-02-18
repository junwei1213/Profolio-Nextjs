import type React from "react"

interface SocialLinkProps {
  href: string
  "aria-label": string
  children: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, "aria-label": ariaLabel, children }) => (
  <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors duration-200" aria-label={ariaLabel}>
    {children}
  </a>
)

export default SocialLink

