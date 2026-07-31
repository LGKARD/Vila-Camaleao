import type { WhatsAppButtonProps } from '../types'

function WhatsAppButton({ href, children, className }: WhatsAppButtonProps) {
  return (
    <a className={`btn btn--whatsapp${className ? ` ${className}` : ''}`} href={href}>
      <i aria-hidden="true" className="fa-brands fa-whatsapp" />
      {children}
    </a>
  )
}

export default WhatsAppButton
