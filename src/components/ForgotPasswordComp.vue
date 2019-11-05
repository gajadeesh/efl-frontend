<template>
  <v-app>
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs4></v-flex>
        <v-flex  xs4 class="card pa-5">
          <img src="@/assets/efl-logo.png" />
          <!-- <h2 style="color:white;font-weight:400;">Welcome to the EFL</h2> -->
          <br />
          <br />
          <br />
          <br />
          <br />
          <!-- <p class="text-md-center"> -->
            <v-flex v-if="showForget">
          <v-layout row>
            <h3 class="white--text">Forgot Your Password?</h3>
          </v-layout>
          <v-layout row class="pt-3">
            <p class="white--text">Enter your email address you're using for your account below</p>
          </v-layout>
          <form class="form-signin" @submit.prevent="validate">
          <v-layout row class="pb-5">
            <input
              type="text"
              placeholder="Email Address"
              :rules="emailRules"
              v-model="recoveryEmail.email"
              class="my-input"
            />
          </v-layout>
          <!-- <input type="password" placeholder="Password" v-model="Login.password" class="my-input" /> -->
          <!-- <p
              class="text-md-right"
              style="cursor:pointer;color:#A4A2A2;font-weight:400;"
              @click="forgetView"
          >Forgot Password</p>-->
          <v-alert
            :value="alertUser"
            prominent
            type="error"
            border="top"
            icon="mdi-home"
            transition="scale-transition"
          >User not Registered!</v-alert>
          <v-alert
            :value="alertEmpty"
            prominent
            type="error"
            border="top"
            icon="mdi-home"
            transition="scale-transition"
          >Email Field is Empty!</v-alert>
          <v-layout row class="pt-5">
            <v-btn class="white--text" large color="#f79727" :loading="Lloading" type="submit">Submit</v-btn>
            <v-btn class="grey--text" large outline>Back</v-btn>
          </v-layout>
          <!-- </p> -->
          </form>
            </v-flex>
            <v-flex v-else>
               <v-layout row>
                  <h3 class="white--text">Reset Password Email Sent</h3>
                </v-layout>
                <v-layout row>
                  <p class="dimFont--text pt-5 pb-5">An email has been sent to your given email address, <strong class="orange--text">test@efl.com</strong>. Use the temperory password to reset your new password.</p>  
                </v-layout>

                <v-flex class="dimFont--text pt-5">
                  <p>Didn't receive the email yet?</p>
                  <p>Click <strong class="orange--text">re-send</strong>.the email</p> 
                  </v-flex >

            </v-flex>
        </v-flex>
        <v-flex xs4></v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      recoveryEmail: {
        email:''
      },
      alertUser:false,
      alertEmpty:false,
      showForget:true,
      Lloading: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    }
    
  },
  methods:{
    validate: function() {
      // console.log(this.Login)
      if (this.recoveryEmail.email == "") {
        this.alertEmpty = true;
        // this.alertEmpty = false;
        this.alertUser = false;
      } else {
        this.Lloading = true;
        this.alertEmpty = false;
        this.alertUser = false;
        // console.log('empty')
        this.submit();
      }
    },
    submit: async function(){
      this.Lloading = true
      let vm = this;
      const data = await axios
        .post("http://192.168.8.100:8000/api/efl/password/email",vm.recoveryEmail)
        .then(response => {
          // console.log(response.data);
           if(response.data.data === "passwords.sent"){
             this.showForget = false
             this.Lloading = false
           }else if(response.data.message === "Email could not be sent to this email address."){
             this.alertUser = true
             this.Lloading = false
           }
          // const token = response.data.access_token
          // const ref_token = response.data.refresh_token

          // localStorage.setItem('token',token);
          // localStorage.setItem('retoken',ref_token);

          // this.$router.push('/dashboard')
        })
          .catch(err =>{
         console.log(err);
          vm.alertUser = true
          vm.Lloading = false;
        })
    }
  }
};
</script>

<style>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 0.75px solid white;
  border-radius: 4px;
  color: white;
}
::placeholder {
  color: #a4a2a2;
  font-weight: 300;
}
</style>
