import type { ReactNode } from 'react'

export type NavItem = {
  href: string
  label: string
}

export type NavLinkProps = {
  href: string
  children: string
  onClick?: () => void
}

export type NavBarProps = {
  logoSrc: string
  logoAlt: string
  items: NavItem[]
}

export type HeaderProps = {
  logoSrc: string
  logoAlt: string
}

export type WhatsAppButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export type OutlineButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export type HeroHighlight = {
  iconClassName: string
  label: string
}

export type HeroProps = {
  title: ReactNode
  description: string
  whatsappHref: string
  moreHref: string
  imageSrc: string
  imageAlt: string
  highlights: HeroHighlight[]
}

export type DifferentialCardData = {
  iconClassName: string
  title: string
  description: string
}

export type DifferentialCardProps = DifferentialCardData

export type DifferentialsSectionProps = {
  items: DifferentialCardData[]
}

export type AboutSectionProps = {
  kicker: string
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  imageSrc: string
  imageAlt: string
}

export type FeatureItemData = {
  iconClassName: string
  label: string
  accentClassName: string
}

export type FeatureItemProps = FeatureItemData

export type FeaturesSectionProps = {
  title: string
  items: FeatureItemData[]
  buttonLabel: string
  buttonHref: string
}

export type CtaSectionProps = {
  logoSrc: string
  logoAlt: string
  title: string
  description: string
  whatsappHref: string
  whatsappLabel: string
}

export type FooterLinkItem = {
  href: string
  label: string
}

export type FooterColumn = {
  title: string
  links: FooterLinkItem[]
}

export type FooterContactItem = {
  iconClassName: string
  lines: string[]
}

export type FooterSocialLink = {
  href: string
  label: string
  iconClassName: string
  className?: string
}

export type FooterProps = {
  logoSrc: string
  logoAlt: string
  columns: FooterColumn[]
  contactTitle: string
  contactItems: FooterContactItem[]
  socialLinks: FooterSocialLink[]
  copyrightText: string
}
