<template>
  <v-app style="background-color:#3F3F3F;">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs4></v-flex>
        <v-flex xs4>
          <img src="@/assets/efl-logo.png" />
          <h2 style="color:white;font-weight:400;">Welcome to the EFL</h2>
          <br />
          <br />
          <br />
          <!-- <p class="text-md-center"> -->
          <h3 style="color:white;font-weight:400;">Please LogIn</h3>
          <br />
          <input type="text" placeholder="Username" v-model="userName" class="my-input" />
          <input type="password" placeholder="Password" v-model="passWord" class="my-input" />

          <p
            class="text-md-right"
            style="cursor:pointer;color:#A4A2A2;font-weight:400;"
            >forgot password</p>
          <v-btn class="white--text" color="#f79727" :loading="Lloading" @click="validate">Login</v-btn>
          <!-- </p> -->
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
      Lloading: false,
      userName: "",
      passWord: ""
    };
  },
  methods: {
    validate: function() {
      this.Lloading = true;
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
  color: #A4A2A2;
  font-weight: 300;
}
</style>
