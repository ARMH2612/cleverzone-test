<template>
  <div class="sidenav">
    <router-link class="router-link" to="/dashboard/patients">Patients</router-link>
    <router-link class="router-link" to="/dashboard/waiting-list">Waiting list</router-link>
    <router-link class="router-link" to="/dashboard/appointments">Appointments</router-link>
  </div>
</template>

<script>
export default {
    name: 'SideMenu'
}
</script>

<style>
.sidenav{
    width: 20%;
    height: 100%;
    /* border:1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 0 5px rgba(0, 0, 0, .04);
}
.router-link{
    display: flex;
    height: 3rem;
    font-size: .9rem;
    width: 90%;
    border-bottom: 1px solid rgb(199, 199, 199);
    text-decoration: none;
    color: rgb(61, 61, 61);
    font-weight: bold;
    align-items: center;
    justify-content: center;
}
.router-link:hover{
    color:white;
    background-color: rgb(155, 187, 251);
}
.router-link-active{
    background-color: rgb(37, 103, 236);
    color:white;
    border-radius: 10px;
}
</style>