<template>
  <v-app v-if="showDashboard">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs4></v-flex>
        <v-flex xs4 class="card pa-5">
          <img src="@/assets/efl-logo.png" />
          <h2 style="color:white;font-weight:400;">Welcome to the EFL</h2>
          <br />
          <br />
          <br />
          <!-- <p class="text-md-center"> -->
          <h3 class="white--text">Please LogIn</h3>
          <br />
          <form class="form-signin" @submit.prevent="validate">
            <input
              type="text"
              placeholder="Username"
              :rules="RemailRules"
              v-model="Login.username"
              class="my-input"
            />
            <input type="password" placeholder="Password" v-model="Login.password" class="my-input" />
            <p
              class="text-md-right"
              style="cursor:pointer;color:#A4A2A2;font-weight:400;"
              @click="forgetView"
            >Forgot Password</p>

            <v-btn class="white--text" color="#f79727" :loading="Lloading" type="submit">Login</v-btn>
            <!-- </p> -->
          </form>
          <v-alert
            :value="alertEmpty"
            prominent
            type="error"
            border="top"
            icon="mdi-home"
            transition="scale-transition"
          >Please fill all the fields</v-alert>
          <v-alert
            :value="alertAuth"
            prominent
            type="error"
            border="top"
            icon="mdi-home"
            transition="scale-transition"
          >Oops Somthing went wrong!!.. Try Again!!...</v-alert>
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
      showDashboard: false,
      Lloading: false,
      alertEmpty: false,
      alertAuth: false,
      dialog: false,
      Remail: {
        email: ""
      },
      RemailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      Header: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          // "Access-Control-Allow-Origin": "*",
        }
      },
      Login: {
        username: "",
        password: "",
        provider: "efl_users"
      }
    };
  },
  methods: {
    validate: function() {
      // console.log(this.Login)
      if (this.Login.username == "" || this.Login.password == "") {
        this.alertEmpty = true;
        // this.alertEmpty = false;
        this.alertAuth = false;
      } else {
        this.Lloading = true;
        this.alertEmpty = false;
        // console.log('empty')
        this.LoginAttempt();
      }
    },
    LoginAttempt: function() {
      let vm = this;
      // const header = this.header
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      };
      // console.log(process.env.VUE_APP_API_URL_LOGIN)
      axios
        .post(`${process.env.VUE_APP_API_URL_LOGIN}login`, vm.Login, vm.Header)
        .then(response => {
          const token = response.data.access_token;
          // const ref_token = response.data.refresh_token

          localStorage.setItem("token", token);
          // localStorage.setItem('retoken',ref_token);

          // window.isSignedIn = true;
          // const payload = this.$jwt.decode(token)
          //  console.log(dcode);

          // Bus.$emit('loggedIn')
          // console.log(response.status)
          const status = response.status

          //redirect logic
          if (status == 200) {
            window.location.replace("/dashboard");
          }
        })
        .catch(err => {
          console.log(err);
          (vm.alertAuth = true), (vm.alertEmpty = false);
          vm.Lloading = false;
        });
    },
    forgetView: function() {
      this.$router.push("/forgot-password");
    },
    forgot: async function() {
      let vm = this;
      const data = await axios
        .post("http://192.168.8.124:70/api/efl/password/email", vm.Remail)
        .then(response => {
          console.log(response.data);
          // const token = response.data.access_token
          // const ref_token = response.data.refresh_token

          // localStorage.setItem('token',token);
          // localStorage.setItem('retoken',ref_token);

          // this.$router.push('/dashboard')
        });
    }
  },
  beforeMount() {
    if (localStorage.getItem("token")) {
      this.$router.push("/dashboard");
    } else {
      this.showDashboard = true;
    }
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
