import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'
import Table from '../views/Table.vue'

let routes =  [
    {
        path: '/',
        component: Home
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    }
]


export default routes;
