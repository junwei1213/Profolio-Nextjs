import type React from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  mobile?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => (
  <a
    href={href}
    className={`${
      mobile ? "block" : "inline-block"
    } px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200`}
  >
    {children}
  </a>
)

export default NavLink

