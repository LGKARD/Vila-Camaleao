import type { FooterProps } from '../types'

function Footer({ logoSrc, logoAlt, columns, contactTitle, contactItems, socialLinks, copyrightText }: FooterProps) {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-top">
        <div className="footer-brand">
          <img className="footer-logo" src={logoSrc} alt={logoAlt} />
        </div>

        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3 className="footer-column-title">{column.title}</h3>
            <ul className="footer-column-list">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column footer-contact">
          <h3 className="footer-column-title">{contactTitle}</h3>
          <ul className="footer-contact-list">
            {contactItems.map((item) => (
              <li className="footer-contact-item" key={item.iconClassName}>
                <i aria-hidden="true" className={`footer-contact-icon ${item.iconClassName}`} />
                <span className="footer-contact-text">
                  {item.lines.map((line) => (
                    <span className="footer-contact-line" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <ul className="footer-socials">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  className={`footer-social-link ${social.className ?? ''}`}
                  href={social.href}
                  aria-label={social.label}
                >
                  <i aria-hidden="true" className={social.iconClassName} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-copy">{copyrightText}</p>
    </footer>
  )
}

export default Footer
