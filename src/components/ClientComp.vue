<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">List of Companies</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn
              depressed
              flat
              class="orange white--text"
              @click="CAccesslevel"
              large
            >Add New Company</v-btn>
          </v-layout>
        </v-layout>
        <!-- </v-layout> -->

        <v-list avatar dense class="background pa-4">
          <v-list-item v-for="item in Clients" :key="item.title" link>
            <v-flex class="pa-3 py-5">
              <v-layout row>
                <v-flex md1>
                  <v-layout row>
                    <h4 class="dimFont--text">{{item.orgName}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex md3>
                  <v-layout row>
                    <h4 class="dimFont--text">{{item.orgAddressLine1}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex md3>
                  <v-layout row>
                    <h4 class="dimFont--text">{{item.orgDefaultCurrency}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex md3>
                  <v-layout row>
                    <h4 class="white--text">{{item.orgPhone}}</h4>
                  </v-layout>
                </v-flex>
                
                <v-flex md1>
                  <v-layout row>
                    <v-btn flat class="orange--text">View</v-btn>
                  </v-layout>
                </v-flex>
                <v-flex md1>
                  <v-layout row>
                    <v-btn flat class="orange--text">Edit</v-btn>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-divider class="grey darken-1"></v-divider>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      Clients: [
        {
          ShipmentId: "EFL-XXXX-YYYY-332",
          Date: "000-001",
          Currency: "$",
          Billing: 1142,
          invoiceCount: 2,
          Status: "Pending Approval"
        }
      ]
    };
  },
  methods:{
    CAccesslevel:function(){
      this.$router.push({name:"createclient"})
    }
  },
  created(){
    this.FilterCompany
  },
  computed:{
    FilterCompany:function(){
      // console.log(token)
      const vm =this
    //  const token = localStorage.getItem("token");

    const Header = { headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
    }

       axios.get(`${process.env.VUE_APP_API_URL_LOGIN}admin/customer`, Header)
        .then(function(response) {
          // handle success
          console.log(response.data.data);
          vm.Clients = response.data.data
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
</style>