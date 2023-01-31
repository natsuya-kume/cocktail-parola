export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "cocktail": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/cocktail/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
