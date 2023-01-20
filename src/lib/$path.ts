export const pagesPath = {
  changelog: {
    $url: (url?: { hash?: string }) => ({ pathname: '/changelog' as const, hash: url?.hash }),
  },
  component: {
    alert: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/component/alert' as const,
        hash: url?.hash,
      }),
    },
    button: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/component/button' as const,
        hash: url?.hash,
      }),
    },
  },
  dashboard: {
    analytics: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/dashboard/analytics' as const,
        hash: url?.hash,
      }),
    },
    default: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/dashboard/default' as const,
        hash: url?.hash,
      }),
    },
    saas: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/dashboard/saas' as const,
        hash: url?.hash,
      }),
    },
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash }),
}

export type PagesPath = typeof pagesPath
