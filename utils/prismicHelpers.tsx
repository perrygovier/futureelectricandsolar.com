import Prismic from '@prismicio/client'
import Link from 'next/link'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://futureelectricandsolar.prismic.io/api/v2'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/[uid]'
  }
  return '/'
}

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link key={element.data.id} href={hrefResolver(element.data)} as={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
)

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req))
)

const createClientOptions = (req = null) => {
  const reqOption = req ? { req } : {}
  return {
    ...reqOption,
  }
}

export const getPrismicPageContent = async (page:string, preview, previewData) => {
  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle(page, ref ? { ref } : null) || {}
  const themeContent = await client.getSingle('site_theme', ref ? { ref } : null) || {}

  // console.log(menu)

  return {
    props: {
      doc,
      themeContent,
      preview
    }
  }
}

export default Client