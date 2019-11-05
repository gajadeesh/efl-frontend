<template>
  <v-app  style="width:100%;">
    <!-- <v-container> -->
      <v-content class="pa-1">
      <v-layout row>
        <v-flex md6 column class="pl-4 py-4">
          <!-- <v-flex xs12 > -->
          <v-card color="card" class="pt-2" width="800px">
            <v-layout align-right justify-end class="pr-3">
              <v-icon>launch</v-icon>
            </v-layout>
            <p class="orange--text pl-5 pt-5">EFL -XXXX - YYYY -332</p>

            <p class="dimFont--text pl-5">
              Quotation No. XXXX
              <br />Origin Departure Date / Time: 10-12-18 13:00hrs (+0530 UT)
              <br />Current Location / Port : MY DIC
              <br />Status: Held in Customs
            </p>
            <v-flex class="pl-5">
              <v-btn class="dimFont--text" small outline>GO TO SHIPMENT</v-btn>
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
            <!-- <v-layout row > -->

            <v-container fluid grid-list-sm class="bottomColor dimFont--text">
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
          <!-- </v-flex> -->

          <!-- </v-container> -->
          <!-- <v-container> -->
          <v-layout row class="pt-4">
            <v-layout column class="pr-2">
              <v-card class="card dimFont--text">
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
              <v-card class="card dimFont--text">
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
              <v-card class="card dimFont--text">
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
        </v-flex>
        <!-- <v-layout row> -->
        <v-flex md6 class="px-1">
          <!-- <v-container grid-list-md text-center> -->
            <v-layout row>
              <v-flex sm6 class="pt-4 pl-4 pb-4 pr-2">
                <v-card class=" card text-xs-center " width="350">
                  <VueApexCharts
                    width="320"
                    height="220"
                    type="line"
                    :options="JobsOptions"
                    :series="JobsSeries"
                  ></VueApexCharts>
                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat class="white--text" >Jobs</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex sm6 class="pt-4 pl-2">
                <v-card class="text-xs-center" width="350" color="grey darken-3" dark>
                  <VueApexCharts
                    type="line"
                    width="320"
                    height="220"
                    :options="WeeklyMoveOption"
                    :series="WeeklyMoveSeries"
                  ></VueApexCharts>

                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat>Weekly Movement</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row class="px-4 pb-2">
              <v-flex xs12>
                <v-card class="card" >
                  <VueApexCharts
                    type="line"
                    height="320"
                    :options="ShipmentOptions"
                    :series="ShipmentSeries"
                  ></VueApexCharts>


                  <v-card-actions class="justify-center bottomColor dimFont--text py-3">
                    <v-layout row>
                      <v-layout col>
                        <v-layout row>
                          <v-btn block flat class="white--text">On Time Shipments <v-icon
                              color="orange"
                              class="orange"
                              style="font-size:11px;height:12px;"
                            >play_arrow</v-icon></v-btn>
                          
                          
                        </v-layout>
                      </v-layout>
                      <v-layout col>
                        <v-layout row>
                          <v-btn block flat class="white--text">Delayed Shipments</v-btn>
                        </v-layout>
                      </v-layout>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex sm6 class="pt-3 pr-3 pl-3 pb-4">
                <v-card class="mx-auto text-xs-center" width="350" color="grey darken-3" dark>
                  <!-- <v-card-text> -->
                  <!-- <div> -->
                  <VueApexCharts
                    type="line"
                    width="320"
                    height="220"
                    :options="WeeklyMoveOption"
                    :series="WeeklyMoveSeries"
                  ></VueApexCharts>
                  <!-- </div> -->
                  <!-- </v-card-text> -->
                  <!-- <v-divider></v-divider> -->

                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat>Weekly Cost</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex sm6 class="pt-3 pr-4 pl-3">
                <v-card class="mx-auto text-xs-center" width="350" color="grey darken-3" dark>
                  <!-- <v-card-text> -->
                  <!-- <div> -->
                  <VueApexCharts
                    type="line"
                    width="320"
                    height="220"
                    :options="WeeklyMoveOption"
                    :series="WeeklyMoveSeries"
                  ></VueApexCharts>
                  <!-- </div> -->
                  <!-- </v-card-text> -->
                  <!-- <v-divider></v-divider> -->

                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat>Weekly Toninage</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row class="px-4">


              <gmap-map id="map" :options="options" style="width: 100%; height: 500px">
                <!-- <gmap-polyline :path.sync="path" v-bind:options="{ strokeColor:'orange'}">
         </gmap-polyline> -->
                <GmapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="false"
                  @click="center=m.position"
                  icon="/icon/elf-marker-orange.png"
                />
              </gmap-map>
            </v-layout>
            
          <!-- </v-container> -->
        
        </v-flex>
      </v-layout>
      </v-content>
    <!-- </v-container> -->
  </v-app>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  data() {
    return {
      // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
      
      options: {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 1.8,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,

        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36
              },
              {
                color: "#000000"
              },
              {
                lightness: 40
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#000000"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 18
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 19
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              },
              {
                lightness: 17
              }
            ]
          }
        ]
      },
      markers: [
        {
          position: { lat: 20.157485, lng: 86.089625 }
        },
        {
          position: { lat: 52.51195, lng: 6.091056 }
        },
        {
          position: { lat: 55.85415, lng: -70.091728 }
        },
        {
          position: { lat: 40.85415, lng: 120.091728 }
        },
        {
          position: { lat: -20.85415, lng: -70.091728 }
        },
        {
          position: { lat: -30.85415, lng: 150.091728 }
        }
      ],
      // path: [
      //       {lat: 52.512942, lng: 6.089625 },
      //       {lat: 52.51195, lng: 6.091056 },
      //       {lat: 52.511047, lng: 6.091728 },
// ],
      // zoom: 1.7,
      // center: [0, 0],
      // rotation: 0,
      // geolocPosition: undefined,
      // apiKey:
      //   "ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn",
      // imagerySet: "AerialWithLabels",
      JobsOptions: {
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
            show: true,
            style: {
              color: "blue",
              fontSize: "12px"
            }
          }
        },
        yaxis: {
          labels: {
            show: true, 
            style: {
              color: "white",
              fontSize: "12px"
            }
          },
          min: 0,
          max: 500
        },
        colors: ["#FFA500"],
        dataLabels: {
          enabled: true
        },
        markers: {
          size: 6
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
          }
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
            show: true,
            style: {
              color: "blue",
              fontSize: "12px"
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              color: "white",
              fontSize: "12px"
            }
          },
          min: 0,
          max: 500
        },
        colors: ["#FFA500"],
        dataLabels: {
          enabled: true
        },
        markers: {
          size: 6
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
          }
        },

        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
            show: true,
            style: {
              color: "blue",
              fontSize: "12px"
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              color: "white",
              fontSize: "12px"
            }
          },
          min: 0,
          max: 1200
        },
        colors: ["#FFA500"],
        dataLabels: {
          enabled: true
        },
        markers: {
          size: 6
        }
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
  },
  methods:{
    
  }
};
</script>

<style scoped>
.darkgrey2 {
  background-color: #3f3f3f;
}
</style>
