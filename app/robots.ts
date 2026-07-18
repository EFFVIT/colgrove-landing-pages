import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Paid-social consult/form pages — keep them out of the index.
        disallow: '/m/',
      },
    ],
  }
}
