export default function({ store, redirect, route }){
    if(isLogin(store) && route.name == 'login'){
        return redirect('/')
    }
    if(!isLogin(store) && route.name == 'index'){
        return redirect('/login')
    }
}

const isLogin = (store) => {
    return (store && store.getters['auth/user'])
}