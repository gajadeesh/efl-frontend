<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card">
      <v-container>
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">Lists Of Active Shipment</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn depressed flat class="white--text" small>Active</v-btn>
            <v-btn depressed flat class="white--text" small>History</v-btn>
            <v-btn depressed flat class="orange--text" @click="showFilter = !showFilter" small>Advance Filter</v-btn>
          </v-layout>
        </v-layout>
        <v-layout row class="py-4" v-if="showFilter">
          <v-container md3 grid-list-sm flat class="background pa-4">
            <h3 class="orange--text">Advance Filter</h3>
            <v-layout wrap class="dimFont--text pt-3 ">
              <v-flex md3 class="px-3">
                <p>Transport Mode</p>
                <v-text-field outlined></v-text-field>
                
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Volume</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>ETD</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>ETA</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>INCO Term</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Chargeable</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>ATD</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>ATA</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Container Mode</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Vessel</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Service Level</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>PO Number</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Destination</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Load Port</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Origin</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>HAWB No</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Discharge Port</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Weight</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Voyage / Flight</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3 py-3">
                <v-btn color="orange white--text" large block>Filter</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
        <v-list avatar dense class="background pa-4">
          <v-list-item v-for="item in shipments" :key="item.title" link>
            <v-flex class="py-2">
              <v-layout row>
                <v-flex md10>
                  <h4 class="orange--text pl-5">{{ item.elfid }}</h4>
                </v-flex>
                <v-flex md1>
                  <v-btn
                    color="orange white--text"
                    @click="ShipmentClick(item.elfid)"
                  >Go To Shipment</v-btn>
                </v-flex>
              </v-layout>
              <!-- progress chart -->
              <v-layout row>
                <v-flex md8 class="pt-2 pl-4 pr-4">
                  <v-layout row>
                    <span>
                      <v-icon
                        color="white"
                        style="background-color:orange;font-size:20px;padding:5px;"
                      >play_arrow</v-icon>
                    </span>
                    <v-progress-linear
                      value="90"
                      height="2"
                      color="orange"
                      background-color="grey darken-1"
                    ></v-progress-linear>
                    <v-icon color="iconColor" class="px-2 pb-2">local_shipping</v-icon>
                    <v-progress-linear background-color="grey darken-1" height="2" color="orange"></v-progress-linear>
                    <v-icon color="iconColor" class="px-2 pb-2">train</v-icon>
                    <v-progress-linear height="2" color="orange" background-color="grey darken-1"></v-progress-linear>
                    <span>
                      <v-icon
                        color="white"
                        style="background-color:orange;font-size:20px;padding:5px;"
                      >play_arrow</v-icon>
                    </span>
                    <br />
                    <br />
                  </v-layout>
                </v-flex>
                <v-flex md4 align-right justify-end></v-flex>
              </v-layout>
            </v-flex>
            <v-layout wrap row grid-list-sm>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Quotation No</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.quotation}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Destination</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.destination}}</p>
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
                    <p>HAWB</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.HAWB}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Origin</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.origin}}</p>
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
                    <p>Transport Mode</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.TransportMode}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 md3>
                <v-layout row>
                  <v-flex sm6 class="white--text">
                    <p>Voyage / Flight</p>
                  </v-flex>
                  <v-flex sm6 class="dimFont--text">
                    <p>{{item.voyageorFlight}}</p>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-divider class="grey darken-1"></v-divider>
          </v-list-item>
        </v-list>
      </v-flex>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      showFilter:false,
      shipments: [
        {
          elfid: "EFL-XXXX-YYYY-332",
          quotation: "AAA XXX 002",
          destination: "Colombo",
          ETD: "12:45 PM | 01/08/2019",
          HAWB: "YYY-XX",
          origin: "AAA XXX 002",
          ETA: "12:45 PM | 01/08/2019",
          TransportMode: "Colombo",
          voyageorFlight: "22"
        },
        {
          elfid: "EFL-XXXX-YYYY-332",
          quotation: "AAA XXX 002",
          destination: "Colombo",
          ETD: "12:45 PM | 01/08/2019",
          HAWB: "YYY-XX",
          origin: "AAA XXX 002",
          ETA: "12:45 PM | 01/08/2019",
          TransportMode: "Colombo",
          voyageorFlight: "22"
        },
        {
          elfid: "EFL-XXXX-YYYY-332",
          quotation: "AAA XXX 002",
          destination: "Colombo",
          ETD: "12:45 PM | 01/08/2019",
          HAWB: "YYY-XX",
          origin: "AAA XXX 002",
          ETA: "12:45 PM | 01/08/2019",
          TransportMode: "Colombo",
          voyageorFlight: "22"
        },
        {
          elfid: "EFL-XXXX-YYYY-332",
          quotation: "AAA XXX 002",
          destination: "Colombo",
          ETD: "12:45 PM | 01/08/2019",
          HAWB: "YYY-XX",
          origin: "AAA XXX 002",
          ETA: "12:45 PM | 01/08/2019",
          TransportMode: "Colombo",
          voyageorFlight: "22"
        }
      ]
    };
  },
  methods: {
    ShipmentClick: function(e) {
      console.log(e);
      // if(e){
      this.$router.push({ name: "shipmentid", params: { eid: e } });
      // }
    }
  }
};
</script>
<style>
</style>