import NavBar from './NavBar'
import type { HeaderProps, NavItem } from '../types'

const navItems: NavItem[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#escola', label: 'A Escola' },
  { href: '#educacao', label: 'Educação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

function Header({ logoSrc, logoAlt }: HeaderProps) {
  return <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
}

export default Header
