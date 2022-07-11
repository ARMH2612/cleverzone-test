<template>
  <div class="comp-content">
    <h3>Patients Dashboard</h3>
    <div class="patiens-container">
        <div class="add-patient-form">
            <input type="text" placeholder="First name" v-model="fname" class="form-control">
            <input type="text" placeholder="Last name" v-model="lname" class="form-control">
            <button class="btn btn-success">Add patient</button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.patiens-container{
    width: 60%;
}
.add-patient-form{
    width: 100%;
    height: 60px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
    margin-bottom: 20px;
    padding: 20px;

}
input{
    width:250px;
    height: 40px;
}
button{
    height:40px
}
</style>