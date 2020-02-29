import Vuex from 'vuex'
import auth from './auth';

export const strict = false

 new Vuex.Store({
		modules:{
			auth
		}
  })
