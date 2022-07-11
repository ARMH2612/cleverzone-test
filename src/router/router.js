import { createWebHistory , createRouter} from "vue-router";
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Patients from '../components/Patients.vue'
import WaitingList from '../components/WaitingList.vue'
import Appointments from '../components/Appointments.vue'


const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path :'/dashboard',
            name :'Dashboard',
            component : Dashboard,
            children :[
                {
                    path:'patients',
                    component : Patients
                },
                {
                    path:'waiting-list',
                    component : WaitingList
                },
                {
                    path:'appointments',
                    component : Appointments
                },
            ]
        },
        {
            path :'/',
            name:'Login',
            component: Login
        },
        
    ]
})


export default router