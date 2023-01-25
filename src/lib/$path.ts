export const pagesPath = {
  "changelog": {
    $url: (url?: { hash?: string }) => ({ pathname: '/changelog' as const, hash: url?.hash })
  },
  "cocktail": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/cocktail/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "component": {
    "alert": {
      $url: (url?: { hash?: string }) => ({ pathname: '/component/alert' as const, hash: url?.hash })
    },
    "button": {
      $url: (url?: { hash?: string }) => ({ pathname: '/component/button' as const, hash: url?.hash })
    },
    "componentLayout": {
      $url: (url?: { hash?: string }) => ({ pathname: '/component/componentLayout' as const, hash: url?.hash })
    }
  },
  "dashboard": {
    "analytics": {
      $url: (url?: { hash?: string }) => ({ pathname: '/dashboard/analytics' as const, hash: url?.hash })
    },
    "dashBoardIndex": {
      $url: (url?: { hash?: string }) => ({ pathname: '/dashboard/dashBoardIndex' as const, hash: url?.hash })
    },
    "default": {
      $url: (url?: { hash?: string }) => ({ pathname: '/dashboard/default' as const, hash: url?.hash })
    },
    "saas": {
      $url: (url?: { hash?: string }) => ({ pathname: '/dashboard/saas' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/dashboard' as const, hash: url?.hash })
  },
  "documentation": {
    $url: (url?: { hash?: string }) => ({ pathname: '/documentation' as const, hash: url?.hash })
  },
  "installation": {
    $url: (url?: { hash?: string }) => ({ pathname: '/installation' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
