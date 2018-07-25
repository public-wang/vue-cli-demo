import * as type from '../mutation-types'
import sign from '../../api/signUp'
const state = {
  name: 'baby'
}

const getters = {
  fullName: state => `Hello ${state.name}`
}

const actions = {
  changeMemberName ({commit}, newName) {
    console.log(newName)
    sign.getSignUpInfo(response => {
      commit(type.CHANGE_MEMBER_NAME, response.data.Data.Name || newName)
    })
  }
}

const mutations = {
  [type.CHANGE_MEMBER_NAME] (state, newName) {
    state.name = newName
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
