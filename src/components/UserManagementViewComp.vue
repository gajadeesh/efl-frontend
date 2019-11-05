<template>
  <v-app style="width:100%;">
    <v-content class="pa-5">
      <v-layout row >
        <v-flex md6 class="pr-5">
          
          <v-layout row>

            <v-card flat class="card pa-4 white--text" style="width:100%">
              <v-layout row>
                <v-flex md10>
                  <h2>User Profile</h2>
                  <h3 class="pt-3">
                    <span class="orange--text">David Croos</span> | Status :
                    <span class="light-green--text">Active</span>
                  </h3>
                </v-flex>
                <v-flex md2>
                  <v-btn class="orange--text" @click="edit" outline>Edit</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row class="pt-4" align-center justify-center>
                <v-flex md4>
                  <v-img
                    src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                    aspect-ratio="1"
                    max-width="250"
                    max-height="250"
                  ></v-img>
                </v-flex>
                <v-flex md8>
                  <v-list avatar dense class="card pa-4 white--text">
                    <v-list-item>
                      <v-layout row>
                        <v-flex md4>
                          <p>Address</p>
                        </v-flex>
                        <v-flex md8>
                          <p class="dimFont--text">66701 Cross, Anaheim NH, 21495</p>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex md4>
                          <p>Contact</p>
                        </v-flex>
                        <v-flex md8>
                          <p class="dimFont--text">+94 11 234 5678</p>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex md4>
                          <p>E-mail ID</p>
                        </v-flex>
                        <v-flex md8>
                          <p class="dimFont--text">abc@gmail.com</p>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex md4>
                          <p>Access Level</p>
                        </v-flex>
                        <v-flex md8>
                          <p class="dimFont--text">Admin</p>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex md4>
                          <p>Mode</p>
                        </v-flex>
                        <v-flex md8>
                          <p class="dimFont--text">Mode</p>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex md4>
                          <p>Job Title</p>
                        </v-flex>
                        <v-flex md8>
                          <p class="dimFont--text">Business Administrator</p>
                        </v-flex>
                      </v-layout>
                    </v-list-item>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card>
          </v-layout>
          <v-layout row class="pt-3">
            <v-card flat class="card pa-4 white--text" style="width:100%">
              <v-layout row>
                <h2>Activity Log</h2>
              </v-layout>
              <!-- <v-layout row align-center justify-center>
                <v-flex md3>
                  <p>User</p>
                </v-flex>
                <v-flex md3>
                  <p>Activity</p>
                </v-flex>
                <v-flex md3>
                  <p>Date</p>
                </v-flex>
                <v-flex md3>
                  <p>Time</p>
                </v-flex>
              </v-layout>
              <v-layout row>-->
              <!-- <v-simple-table height="300px">
              <template v-slot:default>-->
              <!-- <table width="100%">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Activity</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in logs" :key="item.user">
                    <td>{{ item.user }}</td>
                    <td>{{ item.activity }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.time }}</td>
                  </tr>
                </tbody>
              </table>-->

              <v-data-table
                dark
                flat
                :headers="headers"
                :items="logs"
                hide-actions
              >
                <template v-slot:items="props">
                  <td>{{ props.item.user }}</td>
                  <td>{{ props.item.activity }}</td>
                  <td>{{ props.item.date }}</td>
                  <td>{{ props.item.time }}</td>
                </template>
              </v-data-table>
              <!-- </template>
              </v-simple-table>-->
              <!-- <v-list class="card" v-for="item in logs" :key="item.User">
                  <v-list-item>
                    <v-layout row>
                      <v-flex md3>
                        <p class="dimFont--text">{{item.User}}</p>
                      </v-flex>
                      <v-flex md3>
                        <p class="dimFont--text">{{item.Activity}}</p>
                      </v-flex>
                      <v-flex md3>
                        <p class="dimFont--text">{{item.Date}}</p>
                      </v-flex>
                      <v-flex md3>
                        <p class="dimFont--text">{{item.Time}}</p>
                      </v-flex>
                    </v-layout>
                  </v-list-item>
              </v-list>-->
              <!-- </v-layout> -->
            </v-card>
          </v-layout>
          <v-layout row class="pt-3">
            <v-card flat class="card pa-4 white--text" style="width:100%">
              <v-layout row>
                <h2>Team</h2>
              </v-layout>
              <v-container grid-list-md fill-height>
                <!-- <v-layout row> -->
                <v-layout row wrap align-content-start>
                  <v-flex md6>
                    <v-layout row class="pa-3">
                      <v-flex md6>
                        <v-img
                          src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                          aspect-ratio="1"
                          max-width="250"
                          max-height="250"
                        ></v-img>
                      </v-flex>
                      <v-flex md6>
                        <h3>User Name</h3>
                        <p>Admin</p>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex md6>
                    <v-layout row class="pa-3">
                      <v-flex md6>
                        <v-img
                          src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                          aspect-ratio="1"
                          max-width="250"
                          max-height="250"
                        ></v-img>
                      </v-flex>
                      <v-flex md6>
                        <h3>User Name</h3>
                        <p>Admin</p>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex md6>
                    <v-layout row class="pa-3">
                      <v-flex md6>
                        <v-img
                          src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                          aspect-ratio="1"
                          max-width="250"
                          max-height="250"
                        ></v-img>
                      </v-flex>
                      <v-flex md6>
                        <h3>User Name</h3>
                        <p>Admin</p>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex md6>
                    <v-layout row class="pa-3">
                      <v-flex md6>
                        <v-img
                          src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                          aspect-ratio="1"
                          max-width="250"
                          max-height="250"
                        ></v-img>
                      </v-flex>
                      <v-flex md6>
                        <h3>User Name</h3>
                        <p>Admin</p>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-layout row align-end justify-end>
                    <v-btn depressed flat small class="orange--text">view more</v-btn>
                  </v-layout>
                </v-layout>
              </v-container>
              <!-- </v-layout> -->
            </v-card>
          </v-layout>
        </v-flex>
        
        <v-flex md6 >
          <v-layout row class="card">
            <v-flex md6>
              <h1 class="orange--text pa-3">EFL</h1>
            </v-flex>
            <v-flex md6 style="background-color:#656565;">
              <h1 class="white--text pa-3">KeenEye</h1>
            </v-flex>
           
          </v-layout>
           <v-divider></v-divider>
          <v-layout row class="card">
            <v-layout row wrap grid-list-md>
              <v-flex md6 class="pa-4">
                <v-card class=" chartColor text-xs-center " width="330">
                  <VueApexCharts
                    width="300"
                    height="200"
                    type="line"
                    :options="JobsOptions"
                    :series="JobsSeries"
                  ></VueApexCharts>
                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat class="white--text" >Monthly Cost</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6 class="pa-4">
                <v-card class="chartColor text-xs-center" width="330">
                  <VueApexCharts
                    type="line"
                    width="300"
                    height="200"
                    :options="WeeklyMoveOption"
                    :series="WeeklyMoveSeries"
                  ></VueApexCharts>

                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat class="white--text" >Weekly Cost</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex sm6 class="pa-4">
                <v-card class="chartColor text-xs-center" width="330">
                  <VueApexCharts
                    type="line"
                    width="300"
                    height="200"
                    :options="WeeklyMoveOption"
                    :series="WeeklyMoveSeries"
                  ></VueApexCharts>

                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat class="white--text" >Monthly revenue</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex sm6 class="pa-4">
                <v-card class="chartColor text-xs-center" width="330">
                  <VueApexCharts
                    type="line"
                    width="300"
                    height="200"
                    :options="WeeklyMoveOption"
                    :series="WeeklyMoveSeries"
                  ></VueApexCharts>

                  <v-card-actions class="justify-center bottomColor dimFont--text">
                    <v-btn block flat class="white--text" >Weekly revenue</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
          <v-layout row class="pa-3">
            <v-card class="card" flat style="width:100%">
              <h2 class="orange--text pl-5 py-4">KeenEye</h2>
              <v-layout row wrap>
              <v-flex md5 class="pa-4">
                <v-img src="/logo/keeneye.jpg" max-height="200" max-width="200"></v-img>
              </v-flex>
              <v-flex md7>
                <v-layout row class="dimFont--text pa-4">
                  <v-layout column>
                  <p>66701 Cross, Anaheim NH, 21495</p>
                  <p>+94 11 234 5678</p>
                  <p>abc@gmail.com</p>
                  <br>
                  <h4 class="white--text">Sales respresentive</h4>
                  <p>John Doe</p>
                  </v-layout>
                </v-layout>
              </v-flex>
              </v-layout>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  data() {
    return {
      uid:"",
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
      ],
      headers: [
        {
          text: "User",
          align: "left",
          sortable: false,
          value: "user"
        },
        { text: "Activity", value: "activity" },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" }
      ],
      logs: [
        {
          user: "Donec",
          activity: "Donec",
          date: "Donec",
          time: "Donec"
        },
        {
          user: "Donec",
          activity: "Donec",
          date: "Donec",
          time: "Donec"
        },
        {
          user: "Donec",
          activity: "Donec",
          date: "Donec",
          time: "Donec"
        }
      ]
    };
  },
  components: {
    VueApexCharts
  },
  created(){
    // console.log(this.$route.params.uedit)
    this.uid = this.$route.params.uedit
  },
  methods:{
    edit:function(){
      this.$router.push({name:"usermanagementedit", params:{ uedit: this.uid}})
    }
  }
};
</script>
<style>
</style>