<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <!-- <form @submit="Bsubmit"> -->
      <v-layout row>
        <v-flex md3 sm12>
          <h1>ihsaidhfi sdh</h1>
        </v-flex>
        <v-flex md3 sm12 class="px-3">
          <v-text-field dark label="Company" v-model="Company.name"></v-text-field>
          <v-text-field dark label="Email" v-model="Company.email"></v-text-field>
          <v-text-field dark label="Admin" v-model="Company.admin"></v-text-field>
          <v-text-field dark label="Mode" v-model="Company.mode"></v-text-field>
          <v-text-field dark label="Job Title" v-model="Company.jobTitle"></v-text-field>
        </v-flex>
        <v-layout md3 sm12></v-layout>
        <v-flex md3 sm12 class="pt-4">
          <!-- {{ACSelected}} -->
          <!-- <v-select
            dark
            :items="AccessLevel"
            outline
            v-model="Company.ACLevel"
            :item-text="AccessLevel"
            :item-value="AccessLevel"
            label="ACCESS LEVEL"
          ></v-select> -->
        </v-flex>
      </v-layout>
      <v-layout row class="pt-4">
        <v-flex md3 sm12 class="pr-3">
          <!-- <country-select  dark v-model="Company.country" :country="country" topCountry="LK" />
          <region-select v-model="Company.region" :country="Company.country" :region="Company.region" />
          -->
          <v-text-area dark label="Address 1" v-model="Company.Address"></v-text-area>
          {{Company.country}}
          <!-- <div style="border: 2px solid white;"> -->
          <select v-model="Company.country" style="color:white;border: 2px solid white;font-size:18px:background:black;">
                  <option  style="color:white;">--Countries--</option>
                  <option v-for="country in Countries" v-bind:key="country.id" style="color:gray" :value="country.id">{{ country.countryName }}</option>
           </select>
          <!-- </div> -->
          
          <v-text-field dark label="Post Code" v-model="Company.postcode"></v-text-field>
          <v-text-field dark label="UNLOCO" v-model="Company.unloco"></v-text-field>
          <v-text-field dark label="Company Register Number" v-model="Company.CRNo"></v-text-field>
        </v-flex>
        <v-flex md3 sm12 class="pl-3">
          <v-text-field dark label="City" v-model="Company.city"></v-text-field>
          <v-text-field dark label="State" v-model="Company.state"></v-text-field>
          <v-text-field dark label="Fax" v-model="Company.fax"></v-text-field>
          <v-text-field dark label="Company Code" v-model="Company.companycode"></v-text-field>
        </v-flex>
        <v-layout md3 sm12></v-layout>
        <v-flex md3 sm12 class="pt-3">
          <v-select dark :items="items" outline v-model="value" label="Assign Sales Representive"></v-select>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-start justify-end fill-height>
        <!-- <v-layout align-end justice-end fill-height> -->
        <v-btn color="orange" class="white--text" @click="Bsubmit" large>Submit</v-btn>
        <!-- </v-layout> -->
      </v-layout>
      <!-- </form> -->
    </v-content>
  </v-app>
</template>
<script>
import { async } from "q";
export default {
  data() {
    return {
      ACSelected: "",
      AccessLevel: [],
      Countries:[],
      Company: []
    };
  },
  created() {
    // const token = localStorage.getItem("token");

    this.FilterALevel;

    this.FilterCountry;
  },
  computed: {
    FilterALevel: function() {
      const vm = this;
      const Header = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      };
      axios
        .get(`${process.env.VUE_APP_API_URL_LOGIN}admin/role`, Header)
        .then(function(response) {
          // handle success
          //   console.log(response.data.data);
          if (response.data.status_code == 200) {
            const val = response.data.data;
            const result = [];
            val.filter(d => {
              result.push(d.roleCode);
              // console.log(d.roleCode)
            });
            // console.log(result)
            vm.AccessLevel = result;
          } else {
            console.log("error");
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    FilterCountry: function() {
      const vm = this;
      const Header = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      };

      axios
        .get(`${process.env.VUE_APP_API_URL_LOGIN}admin/country`, Header)
        .then(function(response) {
          // handle success
            // console.log(response.data);
          // if (response.data.status_code == 200) {
            const val = response.data;
            const result = [];
            val.filter(d => {
              // console.log(d.countryName)
              result.push({
                id: d.id,
                countryCode: d.countryCode,
                countryName: d.countryName
              });
              // console.log(d.roleCode)
            });
            // console.log(result)
            vm.Countries = result;
          // } else {
          //   console.log("error");
          // }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  methods: {
    Bsubmit: async function() {
      //   e.preventDefault()
      console.log(this.Company);
      if (this.Company) {
        const data = {
          orgName: this.Company.name,
          orgAddressLine1: this.Company.address,
          orgAddressLine2: "2",
          orgCounty: 1,
          orgCity: this.Company.city,
          orgPostalCode: this.Company.postalcode,
          orgState: this.Company.state,
          orgUNLOCO: this.Company.unloco,
          orgPhone: "+94774660403",
          orgMobile: "+94774660403",
          orgFax: this.Company.fax,
          orgEmail: this.Company.email,
          orgURL: "http://www.keeneye.solutions",
          orgRegNumber: this.Company.CRNo,
          orgCode: this.Company.companycode,
          orgCWPK: "admin@123",
          orgIsConsignee: 1,
          orgIsConsignor: 1,
          orgIsForwarder: 0,
          orgIsAgentWise: 1,
          orgDefaultOrigin: 1,
          orgDefaultCurrency: 1,
          orgCustomerFlag: 1,
          orgEflFlag: 1,
          orgCwFlag: "admin@123",
          orgStatus: 1
        };

        //  await axios
        //       .post(
        //         `${process.env.VUE_APP_API_URL_LOGIN}admin/customer`,
        //         data[0],
        //         {
        //           headers: {
        //             Accept: "application/json",
        //             Authorization: "Bearer " + token
        //           }
        //         }
        //       )
        //       .then(response => {
        //         console.log(response);
        //         vm.$router.push({ name: "accesslevel" })
        //       })
        //       .catch(function(error) {
        //         console.log(error);
        //       });
      }
    }
  }
};
</script>
<style scoped>
</style>