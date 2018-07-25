import axios from 'axios'
import apiEnv from '../utils/api'
export default {
  getSignUpInfo (cb) {
    axios.post(`${apiEnv.getSignUpApi()}/Activity/GetSignUpShareInfo`, {
      signUpId: 'VMDBkU3Q'
    }).then(function (response) {
      console.log(response)
      cb(response)
    })
  }
}
