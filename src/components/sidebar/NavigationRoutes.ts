export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'users',
      displayName: 'menu.users',
      meta: {
        icon: 'group',
      },
    },
    {
      name: 'projects',
      displayName: 'menu.projects',
      meta: {
        icon: 'folder_shared',
      },
    },
    {
      name: 'payments',
      displayName: 'menu.payments',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'payment-methods',
          displayName: 'menu.payment-methods',
        },
        {
          name: 'pricing-plans',
          displayName: 'menu.pricing-plans',
        },
        {
          name: 'billing',
          displayName: 'menu.billing',
        },
      ],
    },

    {
      name: 'blogs',
      displayName: 'Halaman Website',
      meta: {
        icon: 'timeline',
      },
      children: [
        {
          name: 'forms',
          displayName: 'Hasil Kotak Saran',
        },
        {
          name: 'berita',
          displayName: 'Tambahkan Berita',
        },
      ],
    },

    {
      name: 'settings',
      displayName: 'Ubah Halaman',
      meta: {
        icon: 'public',
      },
      children: [
        {
          name: 'tentang',
          displayName: 'Edit Tentang',
        },
        {
          name: 'beranda',
          displayName: 'Edit Beranda',
        },
        {
          name: 'kontak',
          displayName: 'Edit Kontak',
        },
        {
          name: 'profil',
          displayName: 'Edit Profil',
        },
      ],
    },

    {
      name: 'pengunjung',
      displayName: 'menu.visitor',
      meta: {
        icon: 'visibility',
      },
    },
    // {
    //   name: 'faq',
    //   displayName: 'menu.faq',
    //   meta: {
    //     icon: 'quiz',
    //   },
    // },
    // {
    //   name: '404',
    //   displayName: 'menu.404',
    //   meta: {
    //     icon: 'vuestic-iconset-files',
    //   },
    // },

    {
      name: 'auth',
      displayName: 'menu.auth',
      meta: {
        icon: 'login',
      },
      children: [
        {
          name: 'login',
          displayName: 'menu.login',
        },
        {
          name: 'signup',
          displayName: 'menu.signup',
        },
        {
          name: 'recover-password',
          displayName: 'menu.recover-password',
        },
      ],
    },

    {
      name: 'preferences',
      displayName: 'menu.preferences',
      meta: {
        icon: 'manage_accounts',
      },
    },
    {
      name: 'settings',
      displayName: 'menu.settings',
      meta: {
        icon: 'settings',
      },
    },
  ] as INavigationRoute[],
}
