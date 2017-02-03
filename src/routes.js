

export default [{
    path: '/',
    name: '首页',
    component: r => {
    	require(['./views/index'], r)
    }
}, {
    path: '/login',
    name: '登录',
    component: r => {
    	require(['./views/login'], r)
    }
}]
