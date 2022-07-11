<template>
    <div class="comps-wrapper">
        <SideMenu />
        <router-view />
    </div>
</template>

<script>
import SideMenu from './SideMenu.vue'
    export default{
        name:'Dashboard',
        components:{
            SideMenu
        },  
        methods:{
            print(){
                console.log("i am loaded");
            }
        }
    }
</script>

<style>
.comps-wrapper{
    height: 100vh;
    width: 100%;
    display: flex;
}
.comp-content{
    background-color: rgb(251, 251, 251);
    width: 100%;
    height: 100%;
    padding: 20px;
}
</style>