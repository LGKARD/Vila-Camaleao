import { useEffect, useState } from 'react'
import NavLink from './NavLink'
import WhatsAppButton from './WhatsAppButton'
import type { NavBarProps } from '../types'

function NavBar({ logoSrc, logoAlt, items }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // trava o scroll do body enquanto o drawer estiver aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="site-header" id="inicio">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <img className="brand-logo" src={logoSrc} alt={logoAlt} />
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          {items.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <WhatsAppButton className="header-whatsapp" href="#contato">
          Falar no WhatsApp
        </WhatsAppButton>

        <button
          type="button"
          className="hamburger-btn"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsMenuOpen(true)}
        >
          <i aria-hidden="true" className="fa-solid fa-bars" />
        </button>
      </header>

      <div
        className={`nav-backdrop${isMenuOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={`mobile-drawer${isMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="drawer-close"
          aria-label="Fechar menu"
          onClick={closeMenu}
        >
          <i aria-hidden="true" className="fa-solid fa-xmark" />
        </button>

        <nav className="drawer-nav" aria-label="Navegação móvel">
          {items.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <WhatsAppButton className="drawer-whatsapp" href="#contato">
          Falar no WhatsApp
        </WhatsAppButton>
      </aside>
    </>
  )
}

export default NavBar
