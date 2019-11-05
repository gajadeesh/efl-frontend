<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-3">
      <v-card class="bottomColor" style="">
        <v-layout row>
          <v-layout column align-start justify-start>
            <v-layout row>
              <p class="orange--text pl-5 pt-5">{{eid}}</p>
            </v-layout>
            <v-layout row>
              <p class="dimFont--text pl-5">
                Quotation No. XXXX
                <br />Origin Departure Date / Time: 10-12-18 13:00hrs (+0530 UT)
                <br />Current Location / Port : MY DIC
                <br />Status: Held in Customs
              </p>
            </v-layout>
          </v-layout>
        <v-layout align-end justify-center column class="pr-4">
            <v-btn color="orange lighten-1 white--text" large @click="shipmentView(eid)">Shipping Detail</v-btn>
        </v-layout>
        </v-layout>
        <v-layout row>
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
        </v-layout>
      </v-card>

      <!-- </v-layout> -->

      <v-layout row>
        <v-layout column ><br>
        <v-flex md6  v-for="n in 5" :key="n.id">
          <v-card flat class="bottomColor white--text pa-4">
            <p><b>Customs</b></p>
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
          </v-card>
          <v-divider color="gray"></v-divider>
          
        </v-flex>
        </v-layout>
        <v-flex md6 class="pa-4">
            <v-layout row>
          <gmap-map id="map" :options="options" style="width: 100%; height: 320px">
            <!-- <gmap-polyline :path.sync="path" v-bind:options="{ strokeColor:'orange'}">
            </gmap-polyline>-->
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
            <v-layout row class="pt-3">
          <v-calendar
      type="month"
      dark
      :now="Dtoday"
      :value="Dtoday"
      :short-months="true"
      :events="events"
    ></v-calendar>
            </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      eid: "",
      Dtoday: new Date().getFullYear(),
      options: {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 1.8,
        zoomControl: false,
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
      ]
    };
  },
  created() {
    this.eid = this.$route.params.eid;
  },
  methods:{
    shipmentView:function(e){
      this.$router.push({name : "shipmentdetailview", params:{eid: e}})
    }
  }
};
</script>
<style scoped>
</style>