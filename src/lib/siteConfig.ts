export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'entertainment-blog',
  name: 'Marquee',
  origin: 'https://entertainment-blog.oriz.in',
  tagline: 'Reviews, ranked lists, and honest post-mortems on film, TV, and pop culture',
  description:
    'Marquee — reviews, ranked lists, and honest post-mortems on film, TV, streaming, and pop culture.',
}
