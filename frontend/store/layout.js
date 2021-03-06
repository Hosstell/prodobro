export const state = () => ({
  drawer: false,
  categories: [],
  buttons: require('@/assets/layout-buttons').buttons
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  setDrawer(state, value) {
    state.drawer = value
  }
}

export const actions = {
}

export const getters = {
}
