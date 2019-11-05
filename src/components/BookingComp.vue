<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">Lists Of Booking</h1>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn depressed flat class="orange--text" small>Active</v-btn>
            <v-btn depressed flat class="white--text" small>History</v-btn>
            <v-btn depressed flat class="white--text" small>Booking Request</v-btn>
            <v-btn depressed flat class="white--text"  @click="showFilter = !showFilter" small>Advance Filter</v-btn>
            <!-- <v-btn depressed flat class="white--text" @click="Cbooking" outline medium>Create New Booking</v-btn> -->
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
                <p>Booked Volume</p>
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
                <p>Booked Chargeable Weight</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Carrier</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Warehouse Received Number</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Container Mode</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Booked TUE</p>
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
                <p>Shipper Refference</p>
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
                <p>Destication</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Discharge Port</p>
                <v-text-field outlined></v-text-field>
              </v-flex>
              <v-flex md3 class="px-3">
                <p>Booked Weight</p>
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
          <v-list-item v-for="item in bookings" :key="item.title" link>
            <v-flex class="py-2">
              <v-layout row>
                <v-flex md12>
                  <h4 class="orange--text">{{ item.bookingId }}</h4>
                </v-flex>
                <v-flex md1>
                  <v-btn flat class="orange--text">View</v-btn>
                </v-flex>
              </v-layout>
              <!-- progress chart -->
              <v-layout row>
                <v-flex md10 class="pt-2">
                  <p class="dimFont--text">{{item.shortDes}}</p>
                  <!-- <v-layout row>
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
                  </v-layout>-->
                </v-flex>
                <v-flex md4 align-right justify-end></v-flex>
              </v-layout>
            </v-flex>
            <v-flex md11>
              <v-layout wrap row grid-list-sm>
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
      showFilter:false,
      bookings: [
        {
          bookingId: "B-0-XXX-200",
          shortDes:
            " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          BookedDate: "29/07/2019",
          Origin: "Colombo",
          Destination: "Africa",
          ServiceLevel: "01",
          INCOTerms: "XXX-YYY-99",
          ETA: "25/07/2019",
          ETD: "02/09/2020",
          Status: "Pending"
        },
        {
          bookingId: "B-0-XXX-200",
          shortDes:
            " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          BookedDate: "29/07/2019",
          Origin: "Colombo",
          Destination: "Africa",
          ServiceLevel: "01",
          INCOTerms: "XXX-YYY-99",
          ETA: "25/07/2019",
          ETD: "02/09/2020",
          Status: "Pending"
        },
        {
          bookingId: "B-0-XXX-200",
          shortDes:
            " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          BookedDate: "29/07/2019",
          Origin: "Colombo",
          Destination: "Africa",
          ServiceLevel: "01",
          INCOTerms: "XXX-YYY-99",
          ETA: "25/07/2019",
          ETD: "02/09/2020",
          Status: "Pending"
        },
        {
          bookingId: "B-0-XXX-200",
          shortDes:
            " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          BookedDate: "29/07/2019",
          Origin: "Colombo",
          Destination: "Africa",
          ServiceLevel: "01",
          INCOTerms: "XXX-YYY-99",
          ETA: "25/07/2019",
          ETD: "02/09/2020",
          Status: "Pending"
        }
      ]
    };
  },
  methods:{
    Cbooking:function(){
      this.$router.push({ name : 'createbooking'})
    }
  }
};
</script>
<style scoped>
</style>