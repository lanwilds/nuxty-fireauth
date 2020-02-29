import { auth, GoogleProvider } from "~/plugins/fireinit";

export default {
	namespaced:true,
	state:() => ({
		isLoggedIn:false,
		user:null
	}),
	getters:{
		isLoggedIn(state){
			return state.isLoggedIn;
		},
		user(state){
			return state.user;
		}
	},
	mutations:{
		setUser(state,user){
            state.user = user;
        }
	},
	actions:{
		signInWithGoogle({commit}){
            return new Promise((res,rej) => {
                auth.signInWithRedirect(GoogleProvider).then((response)=>{
                    res(response)
                },error=>{
                    console.log(error)
                    rej(error)
                })
                
            });
        },
        signOut({commit}){
            auth.signOut().then(()=>{
                commit('setUser',null)
            }).catch(err => console.log(err))
        }
	}
}
