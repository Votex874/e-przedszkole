const initState = {
  links: {
    home: {
      name: 'strona główna',
      url: '/'
    },
    news: {
      name: 'aktualności',
      url: '/blog'
    },
    about: {
      name: 'o nas',
      url: '/o-nas'
    },
    contact: {
      name: 'kontakt',
      url: '/kontakt'
    },
    panel: {
      name: 'panel',
      url: '/panel'
    },
    recruitment: {
      name: 'rekrutacja',
      url: '/rekrutacja'
    }
  }
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer