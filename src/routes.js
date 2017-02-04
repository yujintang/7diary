

export default [{
    path: '/',
    name: '首页',
    component: r => {
    	require(['./views/index'], r)
    },
    children:[
        {
        path: '/menu/jianshu',
        name: '简书',
        component: r => {
            require(['./views/menu/jianshu'], r)
            }
        },{
        path: '/menu/gold',
        name: '掘金',
        component: r => {
            require(['./views/menu/gold'], r)
            }
        }
    ]
    }, {
    path: '/login',
    name: '登录',
    component: r => {
    	require(['./views/login'], r)
    }
    },{
    path: '/search',
    name: '搜索',
    component: r => {
        require(['./views/search'], r)
    }
}]
