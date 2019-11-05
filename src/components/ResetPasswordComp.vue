<template>
  <v-app>
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs4></v-flex>
        <v-flex xs4 class="card pa-5">
          <img src="@/assets/efl-logo.png" />
          <h2 class="white--text pt-5 pb-3">Set New Password</h2>

          <p class="dimFont--text pb-2">Please Choose a new password to finish signing in.</p>
          <br />
          <form class="form-signin" @submit.prevent="resetSubmit">
            <v-layout row>
              <v-flex xs11>
                <input
                  type="password"
                  placeholder="New Password"
                  v-model="newPassword"
                  class="my-input"
                />
              </v-flex>
            </v-layout>
            <v-layout row class="pb-5">
              <v-flex xs11>
                <input
                  type="password"
                  placeholder="Re-enter New Password"
                  v-model="RenewPassword"
                  class="my-input"
                />
              </v-flex>
              <v-flex xs1 class="pl-3">
                <v-progress-circular
                  :size="20"
                  :width="2"
                  color="warning"
                  v-if="rnpass"
                  indeterminate
                  class="pl-2 pt-2"
                ></v-progress-circular>
                <v-btn v-if="done" fab dark small color="success">
                  <v-icon dark>done</v-icon>
                 </v-btn>
              </v-flex>
               
                 
               
            </v-layout>
            <!-- <p
              class="text-md-right"
              style="cursor:pointer;color:#A4A2A2;font-weight:400;"
              @click="forgetView"
            >Forgot Password</p>-->

            <v-btn
              class="white--text"
              color="#f79727"
              large
              :loading="Lloading"
              :disabled="sDisabled"
              type="submit"
            >Submit</v-btn>
            <!-- </p> -->
          </form>
          <v-alert
            :value="alertNoMatch"
            prominent
            type="error"
            border="top"
            icon="mdi-home"
            transition="scale-transition"
          >Password doesn't match!!</v-alert>
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
      done: false,
      alertNoMatch: false,
      sDisabled: true,
      Lloading: false,
      npass: false,
      rnpass: false,
      newPassword: "",
      RenewPassword: "",
      // token: ""
    };
  },
  watch: {
    // newPassword: function(val) {
    //   if (val == "") {
    //     this.npass = false;
    //   } else {
    //     this.npass = true;
    //   }
    // },
    RenewPassword: function(val) {
      
      if (val == "") {
        this.rnpass = false;
        this.sDisabled = true;
        this.done = false;
      } else {
        this.rnpass = true;
        if (this.newPassword == val) {
        this.rnpass = false;
        this.done = true;
        this.sDisabled =false;
        }else{
          this.rnpass = true;
          this.sDisabled = true;
          this.done = false;
        }
      }
    }
  },
  mounted() {
    // console.log(this.$route.query.token)
    // this.$route.query.token
    this.token = this.$route.query.token;
  },
  methods: {
    resetSubmit: async function() {
      //  this.$emit("change", evt);
      let vm = this;
       const data = await axios
        .post("http://192.168.8.100:8000/api/efl/password/reset",{token:this.token, password:this.newPassword, password_confirmation:this.RenewPassword})
        .then(response => {
          // console.log(response.data);
          // const token = response.data.access_token
          // const ref_token = response.data.refresh_token
          // localStorage.setItem('token',token);
          // localStorage.setItem('retoken',ref_token);
          // this.$router.push('/dashboard')
        })
        .catch(err =>{
         console.log(err);
          // (vm.alertAuth = true), (vm.alertEmpty = false);
          // vm.Lloading = false;
        })
    },
    
  }
};
</script>

<style scoped>
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
