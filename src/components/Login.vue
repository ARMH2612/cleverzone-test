<template>
    <div class="container">
        <div class="log-sin-btn">
            <button @click="setLogSin(false)" :class="!logsin ? 'active' : ''">Login</button>
            <button @click="setLogSin(true)" :class="logsin ? 'active' : ''">Sign up</button>
        </div>
        <h2>{{logsinText}}</h2>


        <form @submit="signup" v-if="logsin">
            <div class="form-group">
                <label  for="emailS">Email</label>
                <input v-model="email" placeholder="email" type="email" id="email" class="form-control" :class="{error : messages['email']}">
                <small>{{messages['email']}}</small>
            </div>
            <div class="form-group">
                <label for="psw">Password</label>
                <input v-model="psw" placeholder="password" type="password" id="psw" class="form-control" :class="{error : messages['psw']}">
                <small>{{messages['psw']}}</small>
            </div>
            <div class="form-group">
                <label for="psw-rep">Repeat password</label>
                <input v-model="rep_psw" placeholder="password" type="password" id="psw-rep" class="form-control" :class="{error : messages['rep_psw']}">
                <small>{{messages['rep_psw']}}</small>
            </div>
            <button class="btn btn-connecter">Create an account</button>
        </form>


        <form @submit="connect" v-else>
            <div class="form-group">
                <label  for="email">Email</label>
                <input v-model="email" placeholder="email" type="email" id="email" class="form-control" :class="{error : messages['email']}">
                <small>{{messages['email']}}</small>
            </div>
            <div class="form-group">
                <label for="psw">Password</label>
                <input v-model="psw" placeholder="password" type="password" id="psw" class="form-control" :class="{error : messages['psw']}">
                <small>{{messages['psw']}}</small>
            </div>
            <button class="btn btn-connecter">Connect</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
// import { useRoute } from 'vue-router'
export default {
    name:'Login',
    data(){
        return{
            logsin : false,
            logsinText : 'Log in',
            email:'',
            psw:'',
            rep_psw :'',
            messages:[]
        }
    },
    watch:{
        psw(value){
            this.checkPassword(value)
        },
        rep_psw(value){
            this.checkRepPassword(value)
        }
    },
    methods:{
        setLogSin(bool){
            this.logsin = bool
            if (bool){
                this.logsinText = 'Sign up'
            }else{
                this.logsinText = 'Log in'
            }
        },
        async connect(e){
            e.preventDefault()
            this.checkEmail(this.email)
            this.checkPassword(this.psw)
            if(!this.messages['email'] && !this.messages['psw']){
                console.log('you are in the cool');
                await axios.post('http://localhost:8082/login',{email : this.email, psw :this.psw}) .then((response) =>{
                    this.$router.push(`/dashboard`)
                }).catch((err) => console.log(err))
            }else{
                console.log('check again');
            }
        },
        checkEmail(email){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                this.messages['email'] = ''
            }else{
                this.messages['email'] = "Invalide email"
            }
        },
        checkPassword(psw){
            if(psw.length < 8){
                this.messages['psw'] = "Password must be > 8"
            }else{
                this.messages['psw'] = ""
            }
        },
        checkRepPassword(repPsw){
            if(repPsw !== this.psw){
                this.messages['rep_psw'] = "Passwords must be identical"
            }else{
                this.messages['rep_psw'] = ''
            }
        },
        async signup(e){
            e.preventDefault()
            this.checkEmail(this.email)
            this.checkPassword(this.psw)
            this.checkRepPassword(this.rep_psw)
            if(!this.messages['email'] && !this.messages['psw'] && !this.messages['rep_psw']){
                try{
                    const response = await axios.post('http://localhost:8082/signup',{email : this.email, psw :this.psw, rep_psw: this.rep_psw}) 
                }catch(error){
                    console.log(error);
                }
                
            }else{
                console.log('check again');
            }
        }

    }
}
</script>

<style scoped>
.container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    width: 400px;
    /* border:1px solid black */
}
.log-sin-btn{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.log-sin-btn button{
    width: 50%;
    margin-bottom: 20px;
    border: none;
    padding: 10px;
}

.active{
    background-color: rgb(166, 248, 94);
    color: white;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}
form{
    width: 90%;
    min-height: 45vh;
}

.btn-connecter{
    width: 90%;
    background-color: rgb(50, 173, 255);
    color:white;
    margin: 20px 5%;
}
.btn-connecter:hover{
    background-color: rgb(33, 152, 231);
    color: white;
}
.error{
    border: 1px solid red;
}
</style>