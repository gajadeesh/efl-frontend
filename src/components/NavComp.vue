<template>
  <v-flex class="px-5">
    <v-container class="bottomColor py-4 px-5">
      <v-layout row>
        <v-flex xs2 class="pl-5 pt-2">
          <input type="text" placeholder="Search for orders..." v-model="search" class="my-input" />
        </v-flex>

        <!-- <v-flex xs9>
          <v-layout align-center justify-end class="pt-4">
            <v-badge overlap left color="#F79727">
              <template v-slot:badge>2</template>
              <v-btn icon flat>
                <v-icon class="white--text pa-2" @click.stop="msgDrawer = !msgDrawer">mail_outline</v-icon>
              </v-btn>
            </v-badge>

            <v-badge overlap left color="#F79727">
              <template v-slot:badge>6</template>
              <v-btn icon flat>
                <v-icon class="white--text pa-2" @click.stop="notiDrawer = !notiDrawer" medium>notifications</v-icon>
              </v-btn>
            </v-badge>
            <v-badge overlap left color="#F79727">
              <template v-slot:badge>8</template>
              <v-btn icon flat>
                <v-icon class="white--text pa-2" @click.stop="schDrawer = !schDrawer" medium>event</v-icon>
              </v-btn>
            </v-badge>
          </v-layout>
        </v-flex> -->
        <v-layout md1 class="pt-4 pr-5" align-right justify-end>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-layout>
      </v-layout>
      <!-- <v-sheet
    height="500"
    absolute
    class="overflow-hidden"
  >
      -->

      <v-navigation-drawer v-model="msgDrawer" absolute right class="card" temporary>
         <v-subheader class="dimFont--text">Messages</v-subheader>
        <v-divider color="black"></v-divider>
        <v-list avatar dense>
          <v-list-item v-for="item in msgItems" :key="item.title" link >
            <v-flex class="py-2">
            <v-list-item-icon class="px-4">
              <v-icon color="white">{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="dimFont--text">{{ item.title }}</v-list-item-title><br>
              <v-list-item-subtitle><p class="dimFont--text text-sm-right pr-3">{{item.date}}</p></v-list-item-subtitle>
            </v-list-item-content>
            </v-flex>
            <v-divider color="black"></v-divider>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer v-model="notiDrawer" absolute right class="card" temporary>
        <v-subheader class="dimFont--text">Notifications</v-subheader>

        <v-list avatar dense>
          <v-list-item v-for="item in notiItems" :key="item.title" link >
            <v-flex class="py-2">
            <v-list-item-icon class="px-4">
              <v-icon :color="item.status">{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="dimFont--text">{{ item.title }}</v-list-item-title><br>
              <v-list-item-subtitle><p class="dimFont--text text-sm-right pr-3">{{item.date}}</p></v-list-item-subtitle>
            </v-list-item-content>
            </v-flex>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer v-model="schDrawer" absolute right class="card" temporary>
        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in schItems" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- </v-sheet> -->
    </v-container>
  </v-flex>
</template>

<script>
import Pusher from "pusher-js";
export default {
  data() {
    return {
       msgItems: [
        {
          icon:'email',
          title: 'Brunch this weekend?',
          date:'15/6/2015',
        },
        {
          icon:'email',
          title: 'Summer BBQ',
          date:'30/6/2015'
        },
        {
          icon:'email',
          title: 'Oui oui',
          date:'15/6/2015',
        },
        {
          icon:'email',
          title: 'Birthday gift',
          date:'15/6/2015'
        },
        {
          icon:'email',
          title: 'Recipe to try',
          date:'15/6/2015'
        },
      ],
      notiItems: [
        {
          icon:'notifications_active',
          status:'error',
          title: 'Brunch this weekend?',
          date:'15/6/2015',
        },
        {
          icon:'notifications_active',
          status:'success',
          title: 'Summer BBQ',
          date:'30/6/2015'
        },
        {
          icon:'notifications_active',
          status:'success',
          title: 'Oui oui',
          date:'15/6/2015',
        },
        {
           icon:'notifications_active',
           status:'success',
          title: 'Birthday gift',
          date:'15/6/2015'
        },
        {
          icon:'notifications_active',
          status:'error',
          title: 'Recipe to try',
          date:'15/6/2015'
        },
      ],
      schItems: [
        {
          title: 'Brunch this weekend?',
          date:'15/6/2015',
        },
        {
          title: 'Summer BBQ',
          date:'30/6/2015'
        },
        {
          title: 'Oui oui',
          date:'15/6/2015',
        },
        {
          title: 'Birthday gift',
          date:'15/6/2015'
        },
        {
          title: 'Recipe to try',
          date:'15/6/2015'
        },
      ],
      msgDrawer: false,
      notiDrawer:false,
      schDrawer:false,
      search: "",
      pusher: null,
      channel: null,
      message: null
    };
  },
  methods: {
    logout: function() {
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  created() {
    this.pusher = new Pusher("b870e47a34480305d0a2", {
      cluster: "ap2",
      forceTLS: true
    });
    let that = this;
    this.channel = this.pusher.subscribe("newTask");
    this.channel.bind("task-created", function(data) {
      // that.$emit('incoming_chat',data)
      console.log(data);
      alert(JSON.stringify(data));
    });
    // this.$on('incoming_chat', function(notifications){
    //   this.incomingNotification(chatMessage)
    // })
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 0.75px solid white;
  border-radius: 4px;
  color: white;
  /* background-image: url('searchicon.png'); */
  background-position: 10px 10px;
  background-repeat: no-repeat;
}
</style>
