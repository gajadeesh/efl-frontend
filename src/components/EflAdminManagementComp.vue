<template>
<v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">List of Admin</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn
              depressed
              flat
              class="orange white--text"
              @click="CAccesslevel"
              large
            >Add New Admin</v-btn>
          </v-layout>
        </v-layout>
        <v-list avatar dense class="background pa-4">
          <v-list-item v-for="item in elfAdminMangement" :key="item.title" link>
            <v-flex class="pa-3 py-5">
              <v-layout row>
                <v-flex md2>
                  <v-layout row>
                    <h4 class="white--text">Shipment</h4>
                  </v-layout>
                  <v-layout row>
                    <h4 class="dimFont--text">{{item.ShipmentId}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex md2>
                  <v-layout row>
                    <h4 class="white--text">Date</h4>
                  </v-layout>
                  <v-layout row>
                    <h4 class="dimFont--text">{{item.Date}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex md2>
                  <v-layout row>
                    <h4 class="white--text">Status</h4>
                  </v-layout>
                  <v-layout row>
                    <h4 class="dimFont--text">{{item.Status}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex md2>
                  <v-layout row>
                    <h1 class="white--text">{{item.Currency}} {{item.Billing}}</h1>
                  </v-layout>
                </v-flex>
                <v-flex md2>
                  <v-layout row>
                    <h1 class="white--text">{{item.invoiceCount}}</h1>
                  </v-layout>
                </v-flex>
                <v-flex md1>
                  <v-layout row>
                    <v-btn flat class="orange--text">Edit</v-btn>
                  </v-layout>
                </v-flex>
                <v-flex md1>
                  <v-layout row>
                    <v-btn flat class="orange--text">Remove</v-btn>
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
      elfAdminMangement: [
        {
          ShipmentId: "EFL-XXXX-YYYY-332",
          Date: "000-001",
          Currency: "$",
          Billing: 1142,
          invoiceCount: 2,
          Status: "Pending Approval"
        },
        {
          ShipmentId: "EFL-XXXX-YYYY-332",
          Date: "000-001",
          Currency: "$",
          Billing: 1142,
          invoiceCount: 2,
          Status: "Pending Approval"
        },
        {
          ShipmentId: "EFL-XXXX-YYYY-332",
          Date: "000-001",
          Currency: "$",
          Billing: 1142,
          invoiceCount: 2,
          Status: "Pending Approval"
        },
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
  }
};
</script>
<style scoped>

</style>