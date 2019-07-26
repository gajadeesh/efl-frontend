<template>

    <v-card max-width='200' flat>
    <v-navigation-drawer
      height= '100vh'
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item>
        <v-list-item-avatar>
         <v-img :src="require('@/assets/efl-logo.png')" contain width="100%"/>
        </v-list-item-avatar>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>{{ mini ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }}</v-icon>
        </v-btn>
      </v-list-item>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
        <v-layout v-if="!mini">
          <v-btn flat block>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content v-if="!mini" class="pl-3">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          </v-btn>
          </v-layout>

          <v-layout v-else wrap align-center justify-center>
            
          <v-list-item-icon icon>
            <v-btn icon>
            <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-list-item-icon>
        
          
          </v-layout>
          <v-spacer></v-spacer>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

</template>

<script>
export default {
    data(){
        return{
            drawer: true,
            item: 1,
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
