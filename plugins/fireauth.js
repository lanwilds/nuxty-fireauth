import { auth } from './fireinit';

export default context => {
    const { store } = context;

    return new Promise((res,rej) => {
        auth.onAuthStateChanged(user => {
            if(user){
                return res(store.commit('auth/setUser', user))
            }
            return res()
        })
    });

}