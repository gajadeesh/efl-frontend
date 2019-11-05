<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">Access Level</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn
              depressed
              flat
              class="orange white--text"
              @click="CAccesslevel"
              large
            >Create Access Level</v-btn>
          </v-layout>
        </v-layout>
        <v-list avatar dense v-for="item in AccessLevel" class="background" :key="item.id" link>
          <v-list-item>
            <v-flex class="pa-4">
              <v-layout row class="pt-4">
                <v-flex md2 class="pl-4">
                  <h4 class="white--text">{{item.roleCode}}</h4>
                </v-flex>
                <v-flex md7>
                  <h4 class="white--text">{{item.roleDescription}}</h4>
                </v-flex>
                <v-flex md3>
                  <v-layout row justify-end>
                    <v-btn depressed flat class="orange--text" @click="edit(item.id)">edit</v-btn>
                    <v-btn depressed flat class="orange--text">Remove</v-btn>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-divider class="card"></v-divider>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-content>
  </v-app>
</template>
<script>
// import { async } from "q";
export default {
  data() {
    return {
      Header:{
          headers:{
            Accept: "application/json",
            Authorization: "Bearer "+localStorage.getItem('token')
          }
      },
      AccessLevel: []
    };
  },

  created() {
    this.Accesslevel();
  },
  beforeMount(){
    const vm =this
    //  const token = localStorage.getItem("token");

    const Header = { headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
    }

     axios.get(`${process.env.VUE_APP_API_URL_LOGIN}admin/role`,vm.Header)
        .then(function(response) {
          // handle success
          // console.log(response.data.data);
          vm.AccessLevel = response.data.data
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
  },
  methods: {
    edit:function(e) {
      this.$router.push({ name : "editaccesslevel", params: { id: e}})
    },
    Accesslevel: function() {
        let vm =this
    //   const tokens = localStorage.getItem("token");
    //   this.token = "Bearer " + tokens;

    //   // console.log(fullToken)
    //   const headers = {
    //     Accept: "application/json",
    //     Authorization: this.token
    //     // "Access-Control-Allow-Origin": "*"
    //   };
      // console.log(process.env.VUE_APP_API_URL_LOGIN)
      axios.get(`${process.env.VUE_APP_API_URL_LOGIN}admin/role`, vm.Header)
        .then(function(response) {
          // handle success
          // console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    CAccesslevel:function(){
      this.$router.push({name:"createaccesslevel"})
    }
  }
};
</script>
<style scoped>
</style>