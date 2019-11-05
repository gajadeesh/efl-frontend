<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">Lists Of Purchase Order</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn depressed flat class="orange--text" small>Active</v-btn>
            <v-btn depressed flat class="white--text" small>History</v-btn>
            <v-btn depressed flat class="white--text" small>Advance Filter</v-btn>
            <!-- <v-btn depressed flat class="white--text " outline medium>Create New Booking</v-btn> -->
          </v-layout>
        </v-layout>

        <v-list avatar dense class="background pa-4">
          <v-list-item v-for="item in POs" :key="item.title" link>
            <v-flex class="py-2"></v-flex>
            <v-flex md11>
              <v-layout class="py-4" wrap row grid-list-sm>
                <v-flex>
                  <v-layout align-center justify-center row class="white--text pb-2">
                    <h4>Date</h4>
                  </v-layout>
                  <v-layout align-center justify-center row class="dimFont--text">
                    <h4>{{item.Date}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <v-layout align-center justify-center row class="white--text pb-2">
                    <h4>PO No</h4>
                  </v-layout>
                  <v-layout align-center justify-center row class="dimFont--text">
                    <h4>{{item.PO}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <v-layout align-center justify-center row class="white--text pb-2">
                    <h4>Quotation No</h4>
                  </v-layout>
                  <v-layout align-center justify-center row class="dimFont--text">
                    <h4>{{item.QNo}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <v-layout align-center justify-center row class="white--text pb-2">
                    <h4>Good Description</h4>
                  </v-layout>
                  <v-layout align-center justify-center row class="dimFont--text">
                    <h4>{{item.GD}}</h4>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <v-layout align-center justify-center row class="white--text pb-2">
                    <h4>Amount</h4>
                  </v-layout>
                  <v-layout align-center justify-center row class="dimFont--text">
                    <h4>{{item.Currency}} {{item.Amount}}</h4>
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
      POs: [
        {
          Date: "30/07/2019",
          PO: "000-001",
          QNo: "Q-XXXX-334",
          GD: "Q-XXXX-334",
          Amount: 15000,
          Currency: "LKR"
        },
        {
          Date: "30/07/2019",
          PO: "000-001",
          QNo: "Q-XXXX-334",
          GD: "Q-XXXX-334",
          Amount: 15000,
          Currency: "LKR"
        },
        {
          Date: "30/07/2019",
          PO: "000-001",
          QNo: "Q-XXXX-334",
          GD: "Q-XXXX-334",
          Amount: 15000,
          Currency: "LKR"
        },
        {
          Date: "30/07/2019",
          PO: "000-001",
          QNo: "Q-XXXX-334",
          GD: "Q-XXXX-334",
          Amount: 15000,
          Currency: "LKR"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>