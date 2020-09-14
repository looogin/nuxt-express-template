export const state = () => ({ 
  users: []
})

export const mutations = {  
  SET_USERS (state, data) {
    state.users = data
  }
}
