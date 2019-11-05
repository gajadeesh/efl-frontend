<template>
  <v-app style="width:100%;">
    <v-content class="pa-5">
      <h2 class="white--text pl-4 pb-4">User Profile</h2>
      <v-container>
      <v-layout row class="px-4">
        <v-flex md6>
          <v-layout row>
        <v-img aspect-ratio="1" :src="img" max-height="150" max-width="150">
          <v-container fill-height>
            <v-layout row wrap align-center>
              <v-input type="file" prepend-icon="camera_alt"></v-input>
            </v-layout>
          </v-container>
        </v-img>
        <h3 class="pl-3 white--text">
          Status :
          <span class="green--text lighten-1">Active</span>
        </h3>
          </v-layout>
        </v-flex>
        <v-flex md6>
          <v-layout wrap align-center justify-end>
            <v-btn outline color="orange">Add Attachment</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
      </v-container>
      <v-layout row>
        <v-flex md6>
          <v-layout column class="px-5 pt-4">
            <v-text-field dark v-model="firstname" :rules="nameRules" label="First name" required></v-text-field>
            <v-text-field dark v-model="lastname" :rules="nameRules" label="Last name" required></v-text-field>
            <v-text-field dark v-model="Address" label="Address" required></v-text-field>
            <v-text-field dark v-model="Contact" :rules="ContactRules" label="Contact" required></v-text-field>
          </v-layout>
        </v-flex>
        <v-flex md6>
          <v-layout column  class="px-5 pt-4">
            <v-text-field dark v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field dark v-model="AccessLevel" label="Access Level" required></v-text-field>
            <v-text-field dark v-model="Mode" label="Mode" required></v-text-field>
            <v-text-field dark v-model="JobTitle" label="Job Title" required></v-text-field>
          </v-layout>
          
        </v-flex>
        
      </v-layout>
      <v-layout class="pt-4 pr-5" row wrap align-center justify-end>
          <v-btn outline color="orange" >Cancel</v-btn>
          <v-btn color="orange" class="white--text">Save</v-btn>
        </v-layout>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      email: "",
      Address:"",
      Contact:"",
      AccessLevel:"",
      Mode:"",
      JobTitle:"",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jfLKlViuwuFsj7LxN2EKxnYd5AT_htEOYciU8DNu36nRJDKb",
      headers: [
        {
          text: "User",
          align: "left",
          sortable: false,
          value: "user"
        },

        { text: "Activity", value: "activity" },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" }
      ],

      logs: [
        {
          user: "Donec",
          activity: "Donec",
          date: "Donec",
          time: "Donec"
        },
        {
          user: "Donec",
          activity: "Donec",
          date: "Donec",
          time: "Donec"
        },
        {
          user: "Donec",
          activity: "Donec",
          date: "Donec",
          time: "Donec"
        }
      ]
    };
  }
};
</script>
<style>
</style>