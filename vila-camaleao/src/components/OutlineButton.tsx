import type { OutlineButtonProps } from '../types'

function OutlineButton({ href, children, className }: OutlineButtonProps) {
  return (
    <a className={`btn btn--outline${className ? ` ${className}` : ''}`} href={href}>
      {children}
    </a>
  )
}

export default OutlineButton
