<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card">
      <v-card flat class="card pa-5">
        <v-layout row>
          <h3 class="white--text">Shipment Detail View</h3>
        </v-layout>
        <v-layout row class="pt-3">
          <h4 class="orange--text">Shipment ID : S XXX 002</h4>
        </v-layout>
        <v-layout row class="pt-4">
          <v-layout column>
            <v-layout row>
              <h4 class="dimFont--text">Client</h4>
            </v-layout>
            <v-layout row>
              <p class="darkFont--text">ABC PVT LTD</p>
            </v-layout>
            <v-layout row>
              <h4 class="dimFont--text">Contact Information</h4>
            </v-layout>
            <v-layout row wrap>
              <p class="darkFont--text">
                66701 Cross, Anaheim NH,21495
                <br />abc@gmail.com
                <br />+94 11 234 5678
              </p>
            </v-layout>
          </v-layout>
          <v-layout column>
            <v-layout row>
              <h4 class="dimFont--text">Consignee</h4>
            </v-layout>
            <v-layout row>
              <p class="darkFont--text">Victor</p>
            </v-layout>
            <v-layout row>
              <h4 class="dimFont--text">Contact Information</h4>
            </v-layout>
            <v-layout row wrap>
              <p class="darkFont--text">
                66701 Cross, Anaheim NH,21495
                <br />abc@gmail.com
                <br />+94 11 234 5678
              </p>
            </v-layout>
          </v-layout>
          <v-layout column>
            <v-layout row>
              <h4 class="dimFont--text">Consignor</h4>
            </v-layout>
            <v-layout row>
              <p class="darkFont--text">David</p>
            </v-layout>
            <v-layout row>
              <h4 class="dimFont--text">Contact Information</h4>
            </v-layout>
            <v-layout row wrap>
              <p class="darkFont--text">
                66701 Cross, Anaheim NH,21495
                <br />abc@gmail.com
                <br />+94 11 234 5678
              </p>
            </v-layout>
          </v-layout>
        </v-layout>
        <v-layout row class="pt-4">
          <h3 class="white--text">Booking Details</h3>
        </v-layout>
        <v-layout row>
          <v-layout column class="dimFont--text">
            <v-layout row class="pt-4">
              <h4>INCO Term</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Container Mode</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Service Level</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Description</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Origin</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Weight</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Volume</h4>
            </v-layout>
          </v-layout>
          <v-layout column class="darkFont--text">
            <v-layout row class="pt-4">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
          </v-layout>
          <v-layout column class="dimFont--text">
              <v-layout row class="pt-4">
              <h4>Chargeable</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Packs</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Vessel</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Voyage / Flight</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Load Port</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Discharge Port</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>ETA</h4>
            </v-layout>
          </v-layout>
          <v-layout column class="darkFont--text">
              <v-layout row class="pt-4">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
          </v-layout>
          <v-layout column class="dimFont--text">
               <v-layout row class="pt-4">
              <h4>ETD</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>ATD</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>ATA</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>Marks &amp; Number</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>PO Number</h4>
            </v-layout>
            <v-layout row class="pt-3">
              <h4>HAWB No</h4>
            </v-layout>
            <!-- <v-layout row class="pt-3">
              <h4>ETA</h4>
            </v-layout> -->
          </v-layout>
          <v-layout column class="darkFont--text">
              <v-layout row class="pt-4">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
            <v-layout row class="pt-3">
              <p>Donec facilisis tortor</p>
            </v-layout>
          </v-layout>
        </v-layout>
        <v-layout row class="pt-5">
            <v-flex md4>
                <v-layout row>
                <v-layout column><h3 class="dimFont--text">Proforma Invoice</h3></v-layout>
                <v-layout column><p class="darkFont--text">AAABBB</p></v-layout>
                <v-layout column>
                    <h4 class="orange--text">View</h4>
                </v-layout>
                </v-layout>
            </v-flex>
            <v-flex md4>
                <v-layout row>
                <v-layout column><h3 class="dimFont--text">Purchase Order No</h3></v-layout>
                <v-layout column><p class="darkFont--text">AAA-XXX-023</p></v-layout>
                <v-layout column>
                    <h4 class="orange--text">View</h4>
                </v-layout>
                </v-layout>
            </v-flex>
            <v-flex md4>
                <v-layout row>
                <v-layout column class="pt-3">
                    <v-btn v-if="selectedFormat" color="orange lighten-1 white--text">Export As</v-btn>
                    <v-btn v-else disabled>Export As</v-btn>
                </v-layout>
                <v-layout column>
                    <v-select
                        :items="items"
                        label="Select Format"
                        outlined
                        v-model="selectedFormat"
                        dark
                        ></v-select>
                </v-layout>

                </v-layout>
            </v-flex>
        </v-layout>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
    data(){
        return{
            items:[
                "JPEG",
                "PNG",
                "CSV",
            ],
            selectedFormat:""
        }
    },
    methods:{

    }
};
</script>
<style scoped>
</style>