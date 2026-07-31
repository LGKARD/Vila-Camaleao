import type { NavLinkProps } from '../types'

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a className="nav-link" href={href} onClick={onClick}>
      {children}
    </a>
  )
}

export default NavLink
