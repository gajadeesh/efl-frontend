<template>
  <v-app>
    <!-- <v-container fluid> -->
    <v-layout row>
      <v-layout column>
        <v-flex xs12 class="pl-4 py-4">
          <v-card class="pt-2" width="800px">
            <v-layout align-right justify-end class="pr-3">
              <v-icon>launch</v-icon>
            </v-layout>
            <p class="orange--text pl-5 pt-5">EFL -XXXX - YYYY -332</p>

            <p class="pl-5">
              Quotation No. XXXX
              <br />Origin Departure Date / Time: 10-12-18 13:00hrs (+0530 UT)
              <br />Current Location / Port : MY DIC
              <br />Status: Held in Customs
            </p>
            <v-flex class="pl-5">
              <v-btn small outline>GO TO SHIPMENT</v-btn>
            </v-flex>

            <v-flex md12 class="pt-5 pl-4 pr-4">
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
                <v-icon color="grey lighten-1">local_shipping</v-icon>
                <v-progress-linear background-color="grey darken-1" height="2" color="orange"></v-progress-linear>
                <v-icon color="grey lighten-1">train</v-icon>
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
            <!-- <v-layout row > -->

            <v-container fluid grid-list-sm style="background-color:#4b4b4b">
              <p>Origin</p>
              <v-layout row wrap>
                <v-flex xs3>
                  <p>
                    Date processed
                    <br />10-12-18
                    <br />13.00hrs (+0530 UT)
                  </p>
                </v-flex>
                <v-flex xs3>
                  <p>
                    Date processed
                    <br />10-12-18
                    <br />13.00hrs (+0530 UT)
                  </p>
                </v-flex>
                <v-flex xs3>
                  <p>
                    Date processed
                    <br />10-12-18
                    <br />13.00hrs (+0530 UT)
                  </p>
                </v-flex>
                <v-flex xs3>
                  <p>
                    Date processed
                    <br />10-12-18
                    <br />13.00hrs (+0530 UT)
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
            <!-- </v-layout> -->
          </v-card>
        </v-flex>

        <!-- </v-container> -->
        <!-- <v-container> -->
        <v-layout row>
          <v-layout column class="pr-2 pl-4">
            <v-card>
              <v-layout row wrap class="pa-3">
                <v-flex xs6>
                  <v-layout align-center justify-center>Active Quotes</v-layout>
                </v-flex>
                <v-flex xs6 style="cursor:pointer;text-decoration:underline;">
                  <v-layout align-center justify-center>Create New Quote</v-layout>
                </v-flex>
              </v-layout>
              <br />
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
                <v-layout align-center justify-center>
                  <small>Pending confirmation from Client</small>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pt-2 pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
            </v-card>
            <br />
            <v-card>
              <v-layout row wrap class="pa-3">
                <v-flex xs6>
                  <v-layout align-center justify-center>Active Booking</v-layout>
                </v-flex>
                <v-flex xs6 style="cursor:pointer;text-decoration:underline;">
                  <v-layout align-center justify-center>Create New Booking</v-layout>
                </v-flex>
              </v-layout>
              <br />
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
            </v-card>
          </v-layout>
          <v-layout column class="pl-2">
            <v-card>
              <v-layout class="pt-3" align-center justify-center>
                <p>Active Shipments</p>
              </v-layout>
              <br />
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear
                    height="1"
                    color="orange"
                    indeterminate
                    background-color="grey darken-1"
                  ></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear
                    height="1"
                    color="orange"
                    indeterminate
                    background-color="grey darken-1"
                  ></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear
                    height="1"
                    color="orange"
                    indeterminate
                    background-color="grey darken-1"
                  ></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear height="1" color="orange" background-color="grey darken-1"></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="pl-3">
                <p>EFL - XXXX - YYYY _ 332</p>
                <v-layout align-center justify-center>
                  <small align-center>In Transit to Arrival Port</small>
                </v-layout>
                <v-layout row>
                  <v-layout align-left justify-start class="pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  <v-progress-linear
                    height="1"
                    color="orange"
                    indeterminate
                    background-color="grey darken-1"
                  ></v-progress-linear>
                  <v-layout align-right justify-end class="pr-3 pt-2">
                    <v-icon
                      color="grey darken-1"
                      class="grey darken-1"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                </v-layout>
              </v-flex>
            </v-card>
          </v-layout>
        </v-layout>
        <!-- </v-container> -->
      </v-layout>
      <!-- <v-layout row> -->
        <v-layout column class="pa-4">
          <v-container grid-list-md text-center>
            <v-layout row>
                <v-flex sm6 class="pr-3 pl-4 pb-4">
          <v-card class="mx-auto text-xs-center" color="grey darken-3" dark>
            <!-- <v-card-text> -->
              <!-- <div> -->
              <VueApexCharts
                width=380 
                type="line" 
                :options="JobsOptions" 
                :series="JobsSeries"></VueApexCharts>
              <!-- </div> -->
            <!-- </v-card-text> -->
            <v-divider></v-divider>

            <v-card-actions class="justify-center grey darken-2">
              <v-btn block flat>Jobs</v-btn>
            </v-card-actions>
          </v-card>
                </v-flex>
                <v-flex sm6 class="pr-4 pl-3">
          <v-card class="mx-auto text-xs-center" color="grey darken-3" dark>
            <!-- <v-card-text> -->
              <!-- <div> -->
              <VueApexCharts
                type="line"
                width=380
                :options="WeeklyMoveOption"
                :series="WeeklyMoveSeries"
              ></VueApexCharts>
              <!-- </div> -->
            <!-- </v-card-text> -->
            <v-divider></v-divider>

            <v-card-actions class="justify-center grey darken-2">
              <v-btn block flat>Weekly Movement</v-btn>
            </v-card-actions>
          </v-card>
                </v-flex>
            </v-layout>
             <v-layout row class="px-4">
                <v-flex xs12>
                    <v-card class="mx-auto text-xs-center p-5" color="grey darken-3" dark>
            <!-- <v-card-text> -->
              <!-- <div> -->
              <VueApexCharts
                type="line"
                height="320"
                :options="ShipmentOptions"
                :series="ShipmentSeries"
              ></VueApexCharts>
              <!-- </div> -->
            <!-- </v-card-text> -->
            <v-divider></v-divider>

            <v-card-actions class="justify-center grey darken-2">
              <v-layout row>
                <v-layout col>
                  <v-layout row>
                   <v-btn block flat>On Time Shipments</v-btn>
                   <v-layout align-left>
                    <v-icon
                      color="orange"
                      class="orange"
                      style="font-size:11px;height:12px;"
                    >play_arrow</v-icon>
                  </v-layout>
                  </v-layout>
                </v-layout>
                <v-layout col>
                  <v-layout row>
                  <v-btn block flat>Delayed Shipments</v-btn>
                  </v-layout>
                </v-layout>
              </v-layout>
             
            </v-card-actions>
          </v-card>
                </v-flex>
            </v-layout>
            <v-layout row class="pa-3">
                <v-flex sm6 class="pr-3 pl-4 pb-4">
          <v-card class="mx-auto text-xs-center" color="grey darken-3" dark>
            <!-- <v-card-text> -->
              <!-- <div> -->
              <VueApexCharts
                type="line"
                width=380
                :options="WeeklyMoveOption"
                :series="WeeklyMoveSeries"
              ></VueApexCharts>
              <!-- </div> -->
            <!-- </v-card-text> -->
            <v-divider></v-divider>

            <v-card-actions class="justify-center grey darken-2">
              <v-btn block flat>Weekly Cost</v-btn>
            </v-card-actions>
          </v-card>
                </v-flex>
                <v-flex sm6 class="pr-4 pl-3">
          <v-card class="mx-auto text-xs-center" color="grey darken-3" dark>
            <!-- <v-card-text> -->
              <!-- <div> -->
              <VueApexCharts
                type="line"
                width=380
                :options="WeeklyMoveOption"
                :series="WeeklyMoveSeries"
              ></VueApexCharts>
              <!-- </div> -->
            <!-- </v-card-text> -->
            <v-divider></v-divider>

            <v-card-actions class="justify-center grey darken-2">
              <v-btn block flat>Weekly Toninage</v-btn>
            </v-card-actions>
          </v-card>
                </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
        <!-- <v-layout column class="pa-4"> -->
          
        <!-- </v-layout> -->
      <!-- </v-layout> -->
     
    </v-layout>
  </v-app>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  data() {
    return {
      JobsOptions: {
        chart: {
          toolbar: {
                show: false
            },
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
                show: true,
                style: {
                  color: 'blue',
                  fontSize: '12px'
                },
            },
            
        },
         yaxis: {
            labels: {
              show: true,
              style: {
                color: 'white',
                fontSize: '12px'
              },
            },
            min: 0,
            max: 500
          },
          colors: ['#FFA500'],
          dataLabels: {
            enabled: true,
          },
          markers: {
            size: 6,
           
          }
      },
      JobsSeries: [
        {
          data: [268, 243, 254, 227, 350, 423]
        }
      ],

      ShipmentOptions: {
        chart: {
          toolbar: {
                show: false
            },
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
                show: true,
                style: {
                  color: 'blue',
                  fontSize: '12px'
                },
            },
            
        },
         yaxis: {
            labels: {
              show: true,
              style: {
                color: 'white',
                fontSize: '12px'
              },
            },
            min: 0,
            max: 500
          },
          colors: ['#FFA500'],
          dataLabels: {
            enabled: true,
          },
          markers: {
            size: 6,
           
          }
      },
      ShipmentSeries: [
        {
          data: [268, 243, 254, 227, 350, 423]
        }
      ],

      WeeklyMoveOption: {
        chart: {
            toolbar: {
                show: false
            },
        },
        
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
                show: true,
                style: {
                  color: 'blue',
                  fontSize: '12px'
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                color: 'white',
                fontSize: '12px'
                },
            },
            min: 0,
            max: 1200
          },
        colors: ['#FFA500'],
        dataLabels: {
            enabled: true,
          },
          markers: {
            size: 6
          },
        
      },
      WeeklyMoveSeries: [
        {
          data: [1052, 481, 216, 760, 362, 652]
        }
      ]
    };
  },
  components: {
    VueApexCharts
  }
};
</script>

<style>
</style>
