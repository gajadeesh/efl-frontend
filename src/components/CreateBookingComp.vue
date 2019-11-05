<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <!-- <v-layout > -->
      <v-layout align-center justify-center>
        <h2 class="white--text">WELCOME TO EFL BOOKING</h2>
      </v-layout>
      <v-layout row wrap align-center justify-center>
        <v-stepper class="card no-transition" v-model="e1" style="width:80%">
          <!-- <v-stepper-header> -->
          <v-layout row>
            <v-stepper-step :complete="e1 > 1" step="1">Booking Term</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Booking Details</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">Booking Details</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 4" step="4">Origin Charges</v-stepper-step>

            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 5" step="5">Destination Charges</v-stepper-step>

            <v-divider></v-divider>
            <!-- </v-stepper-header> -->
          </v-layout>
          <v-stepper-items>
            <v-stepper-content step="1">
              <!-- <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
              ></v-card>-->
              <v-layout row>
                <v-flex md6>
                  <h4 class="orange--text">BOOKING TERMS AND CONDITIONS</h4>

                  <p
                    class="dimFont--text"
                  >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
                </v-flex>
                <v-flex md6 class="pa-5 fill-height">
                  <p class="dimFont--text pl-5">
                    Thank you for choosing our service
                    <br />Please follow the process to place a new order
                  </p>
                  
                </v-flex>
              </v-layout>
                <v-layout align-end justify-end class="pt-5">
                  <v-btn color="orange white--text" @click="e1 = 2" large>Continue</v-btn>
                  </v-layout>
              <!-- <v-btn text>Cancel</v-btn> -->
            </v-stepper-content>

            <v-stepper-content step="2">
              
              <v-layout row class="pa-5 white--text">
                  <v-layout column>
                      <h3 class="orange--text">BOOKING DETAILS</h3>
                      <br>
                      <h4>STEP 1</h4>
                      <br>

                      <h4>Client</h4>

                      <p class="dimFont--text">
                        ABC PVT LTD
                      </p>
                      <p>66701 Cross, Anahei NH 21496
                        abc@gmail.com
                        +94 11 234 5678
                      </p>

                  </v-layout>
                  <v-layout column></v-layout>
                  <v-layout column></v-layout>
              </v-layout>

              <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

              <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-layout>
      <!-- </v-layout> -->
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      e1: 0
    };
  }
};
</script>
<style scoped>
.no-transition .stepper__content { transition: none; }
</style>