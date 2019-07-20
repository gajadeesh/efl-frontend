<template>
    <v-navigation-drawer
    height= '100vh'
    v-model="drawer"
    :mini-variant.sync="mini"
    hide-overlay
    stateless
  >
  <v-layout row wrap align-center >
  <v-flex v-if="!mini" class="pa-5">
      <v-img  :src="require('@/assets/efl-logo.png')" contain width="50%"/>
  </v-flex>
  <v-flex v-else>
      <v-img :src="require('@/assets/efl-logo.png')" contain width="100%"/>
  </v-flex>
  </v-layout>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <!-- <v-list-tile avatar> -->

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>{{ mini ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }}</v-icon>
            </v-btn>
          </v-list-tile-action>
        <!-- </v-list-tile> -->
      </v-list>
    </v-toolbar>

    <v-list v-if="!mini" class="px-5" dense>
      <!-- <v-divider></v-divider> -->

      <v-list-tile
        v-for="item in items"
        :key="item.title"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list v-else dense>
      <!-- <v-divider></v-divider> -->

      <v-list-tile
        v-for="item in items"
        :key="item.title"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{
            drawer: true,
            items: [
                { title: 'Dashboard', icon: 'home' },
                { title: 'Shipments', icon: 'local_shipping' },
                { title: 'Booking', icon: 'receipt' },
                { title: 'Quotes', icon: 'assignment' },
                { title: 'Billing', icon: 'attach_money' },
                { title: 'Setting', icon: 'settings' }
            ],
            mini: true,
            right: null
        }
    }
}
</script>

<style scoped>

</style>
