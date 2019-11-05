<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">Lists Of Quotation</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn depressed flat class="orange--text" small>Active</v-btn>
            <v-btn depressed flat class="white--text" small>History</v-btn>
            <v-btn depressed flat class="white--text" small>Advance Filter</v-btn>
            <v-btn depressed flat class="white--text " outline medium>Create New Quotation</v-btn>
          </v-layout>
        </v-layout>

        <v-list avatar dense class="background pa-4">
          <v-list-item v-for="item in quotations" :key="item.title" link>
            <v-flex class="py-2">
              <v-layout row align-center justify-center>
                <v-flex md10>
                  <h4 class="orange--text">{{ item.quoteId }}</h4>
                </v-flex>
                <!--   -->
                <v-flex md2 class="pt-2 text-center">
                 <v-layout align-center justify-center>
                  <h1 class="white--text ">{{item.Currency}} {{item.Billing}}</h1>
                 </v-layout>
                 <v-layout align-center justify-center>
                  <v-btn flat class="orange--text">View Proforma Invoice</v-btn>
                 </v-layout>
                </v-flex>
                <!-- </v-layout> -->
              </v-layout>
              <!-- progress chart -->
              <v-layout row>
                <!-- <v-flex md10 class="pt-2"> -->
                  <!-- <p class=" dimFont--text">{{item.shortDes}}</p> -->
                  <!-- <v-row> -->
                  <v-flex md3>
                    <h4 class="white--text">Proforma Invoice</h4>
                  </v-flex>
                  <v-flex md3>
                    <h4 class="dimFont--text">{{item.PIid}}</h4>
                  </v-flex>
                  <v-flex md3>
                    <h4 class="dimFont--text">{{item.QuoteDate}}</h4>
                    </v-flex>
                  
                <v-flex md4 align-right justify-end></v-flex>
              </v-layout>
             
              <v-layout row>
                <h4 class="pt-3 white--text">Status : </h4>
                <h4 class="pt-3 pl-2 dimFont--text">{{item.Status}}</h4>
                <v-btn flat class="pl-3 orange--text">View Quotation</v-btn>
              </v-layout>
              
             
            </v-flex>
            <v-flex md11>
              
            <!-- <v-layout wrap row grid-list-sm>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Booked Date</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.BookedDate}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Origin</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.Origin}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Destination</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.Destination}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Service Level</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.ServiceLevel}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>INCO Terms</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.INCOTerms}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>ETA</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.ETA}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>ETD</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.ETD}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Status</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.Status}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout> -->
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
      quotations: [
        {
          quoteId: "EFL-XXXX-YYYY-332",
          PIid:"Q - 0000 - 2019",
          Billing: 1140,
          Currency:"$",
          QuoteDate: "29/07/2019",
          Status:"Pending Approval"
        },
        {
          quoteId: "EFL-XXXX-YYYY-332",
          PIid:"Q - 0000 - 2019",
          Billing: 1140,
          Currency:"$",
          QuoteDate: "29/07/2019",
          Status:"Pending Approval"
        },
        {
          quoteId: "EFL-XXXX-YYYY-332",
          PIid:"Q - 0000 - 2019",
          Billing: 1140,
          Currency:"$",
          QuoteDate: "29/07/2019",
          Status:"Pending Approval"
        },
        {
          quoteId: "EFL-XXXX-YYYY-332",
          PIid:"Q - 0000 - 2019",
          Billing: 1140,
          Currency:"$",
          QuoteDate: "29/07/2019",
          Status:"Pending Approval"
        },
      ]
    };
  }
};
</script>
<style scoped>
</style>