<template>
  <v-card class="card pa-3" max-width="500" flat>
    <v-list 
        class="card">
      <!-- <v-navigation-drawer height="100vh" class="card dimFont--text" v-model="drawer" :mini-variant.sync="mini" permanent> -->
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('@/assets/efl-logo.png')" contain width="100%" />
        </v-list-item-avatar>
        <v-layout align-center justify-center>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon
              class="dimFont--text"
            >{{ mini ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }}</v-icon>
          </v-btn>
        </v-layout>
      </v-list-item>
      <v-list-tile class="card" link @click="linked('dashboard')">
        <v-layout v-if="!mini">
          <!-- {{item}} -->
          <!-- <v-btn flat block> -->
          <v-list-tile-icon>
            <!-- <v-icon class="white--text" v-text="item.icon"></v-icon> -->
            <!-- {{item.img}} -->
            <img :src="iconPath+'home'+png" width="25" height="25" />
            <!-- <v-img :src="require(iconPath+item.img+png)"/> -->
          </v-list-tile-icon>
          <v-list-tile-content class="pl-3">
            <v-list-tile-title class="white--text">Dashboard</v-list-tile-title>
          </v-list-tile-content>
          <!-- </v-btn> -->
        </v-layout>

        <v-layout v-else>
          <v-list-tile-icon icon>
            <v-btn icon @click="linked(item.module.module_path)">
              <img :src="iconPath+item.module.moduleName+png" width="25" height="25" />
            </v-btn>
          </v-list-tile-icon>
        </v-layout>
      </v-list-tile>
      <v-list 
      class="card"
      v-for="item in menuList"
        :key="item.module.id">
      <!-- <v-list-tile-group> -->
      <v-list-tile
      v-if="item.module.moduleName != 'Setting'"
        link
        @click="linked(item.module.module_path)"
      >
        <v-layout v-if="!mini" >
          <!-- {{item}} -->
          <!-- <v-btn flat block> -->
            <!-- <v-layout v-if="!item.module.moduleName == 'Setting'"> -->
          <v-list-tile-icon >
            <!-- <v-icon class="white--text" v-text="item.icon"></v-icon> -->
            <!-- {{item.img}} -->
            <img :src="iconPath+item.module.moduleName+png" width="25" height="25" />
            <!-- <v-img :src="require(iconPath+item.img+png)"/> -->
          </v-list-tile-icon>
          <v-list-tile-content class="pl-3">
            <v-list-tile-title  class="white--text">{{ item.module.moduleName }}</v-list-tile-title>
          </v-list-tile-content>
            </v-layout>
          <!-- </v-btn> -->
          <!-- <v-layout v-if="item.module.moduleName == 'Setting'">
            hellow
          </v-layout> -->
        <!-- </v-layout> -->

        <v-layout v-else>
          <v-list-tile-icon icon>
            <v-btn icon @click="linked(item.module.module_path)">
              <img :src="iconPath+item.module.moduleName+png" width="25" height="25" />
            </v-btn>
          </v-list-tile-icon>
        </v-layout>
      </v-list-tile>

      <!-- </v-list-tile-group> -->
      </v-list>
      <!-- <v-spacer></v-spacer>
        
      </v-list-tile>
      <v-list-tile>-->
        <v-expansion-panel popout>
          <v-expansion-panel-header>
              
          </v-expansion-panel-header>
          <v-expansion-panel-content class="card white--text">
            <div slot="header" v-on:click="isHidden = !isHidden">
              <v-layout row>
              <img src="/icon/Setting.png" width="25" height="25" />
              <p class="pl-3">Setting</p>
              
              </v-layout>
            </div>
                <v-list-tile v-for="item in settingList" :key="item.id">
                  <v-btn flat dense @click="linked(item.module_path)">
                  <v-list-tile-icon>
                    <img :src="iconPath+item.moduleName+png" width="25" height="25" />
                  </v-list-tile-icon>
                  <v-list-tile-content class="pl-3">
                    <v-list-tile-title class="white--text">{{ item.moduleName }}</v-list-tile-title>
                  </v-list-tile-content>
                  </v-btn>
                </v-list-tile>
              
          </v-expansion-panel-content>
        </v-expansion-panel>
      <!--</v-list-tile>-->
      <v-layout v-if="mini" align-center justify-center>
        <v-btn icon @click="linked('setting')">
          <!-- <v-icon class="dimFont--text">settings</v-icon> -->
          <img src="/icon/Setting.png" width="25" height="25" />
        </v-btn>
      </v-layout>
      <v-layout v-if="mini" align-center justify-center>
        <v-btn icon @click="linked('user-management')">
          <v-icon class="dimFont--text">account_circle</v-icon>
        </v-btn>
      </v-layout>
      
      
      <!-- {{item}} -->
      <!-- <span v-if="index != Object.keys(menuList).length - 1"> -->
        <!-- <template v-slot:activator >
          <v-list-tile-icon icon>
            <v-btn icon>
              <img src="/icon/Setting.png" width="25" height="25" />
            </v-btn>
          </v-list-tile-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">Setting</v-list-item-title>
          </v-list-item-content>
        </template>
        
        <v-list-group
      
        class="card"
        v-for="(item, index) in settingList"
        :key="index"
        v-model="item.active"
        no-action
        v-if="!mini"
      >
        <v-list  dark >
          
          <v-btn small flat depressed @click="linked(item.module_path)">
            <v-list-tile-icon>
              <img :src="iconPath+item.moduleName+png" width="25" height="18" />
            </v-list-tile-icon>
            <v-list-item-content class="pl-2">
              <v-list-item-title class="dimFont--text" v-text="item.moduleName"></v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list>
      </v-list-group>-->
    </v-list> 
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      settingList: [],
      drawer: true,
      iconPath: "/icon/",
      png: ".png",
      item: 1,
      items: [
        { title: "Dashboard", icon: "home", img: "home" },
        { title: "Shipments", icon: "local_shipping", img: "shipping" },
        { title: "Booking", icon: "receipt", img: "booking" }
        // { title: "Quotes", icon: "assignment", img:"quotes" },
        // { title: "Billing", icon: "attach_money", img:"billing" },
        // { title: "PurchaseOrder", icon: "attach_money", img:"PurOrder" }
        // { title: "Setting", icon: "settings", img:"setting" }
      ],
      setting: [
        {
          action: "settings",
          title: "Setting",
          active: false,
          items: [
            { title: "User Management", path: "usermanagement" }
            // { title: "Consignee Management", path:"consignee-management" },
            // { title: "Consignor Management" ,path:"consignor-management"}
          ]
        }
      ],
      mini: false,
      right: null
    };
  },
  beforeMount() {
    if (token) {
      // const tokened = localStorage.getItem("token");
      //  const payload = this.$jwt.decode(token)
      //  console.log(payload.permissions)
      //  this.menuList = payload.permissions
      // if (tokened) {
        this.menuRender(token);
      // }
      // const headers = {
      //   Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNmOGViNDYzZjhjNGI1MGMxMWZkMWM0NzY5YjllOGQ0ODY3YTg4YjhhMGNiMDlhYzlhYTZjMDMyYmM0NTM0Zjg3YWU3NzVmZDI1MjdjNWRlIn0.eyJhdWQiOiIxIiwianRpIjoiY2Y4ZWI0NjNmOGM0YjUwYzExZmQxYzQ3NjliOWU4ZDQ4NjdhODhiOGEwY2IwOWFjOWFhNmMwMzJiYzQ1MzRmODdhZTc3NWZkMjUyN2M1ZGUiLCJpYXQiOjE1NzEwNTM5MTAsIm5iZiI6MTU3MTA1MzkxMCwiZXhwIjoxNjAyNjc2MzEwLCJzdWIiOiIxIiwidXNlcl9kYXRhIjp7ImlkIjoxLCJlZmxVc2VyRnVsbE5hbWUiOiJOaXB1biBUaGVla3NoYW5hIiwiZWZsVXNlckRlcGFydG1lbnQiOiJJVCIsImVsZlVzZXJFbWFpbCI6Im5pcHVuQGtlZW5leWUuc29sdXRpb25zIiwiZWZsVXNlck1vYmlsZU51bWJlciI6Iis5NDc3OTgwMjAwNyIsImVmbFVzZXJNb2RlIjoiVEVTVCIsImVmbFVzZXJKb2JUaXRsZSI6IklUIEFkbWluaXN0cmF0b3IiLCJlZmxVc2VyQWRkcmVzczEiOiJObyAyOCwgS2FoYXRhd2lsYSIsImVmbFVzZXJBZGRyZXNzMiI6IlBvdGh1d2F0YXdhbmEiLCJlZmxVc2VyQ29udGFjdCI6Iis5NDc3OTgwMjAwNyIsImVmbFVzZXJDaXR5IjoiV2VubmFwcHV3YSIsImVmbFVzZXJDb3VudHJ5IjoxLCJlbGZVc2VyU3RhdHVzIjoxLCJjcmVhdGVkX2F0IjoiMjAxOS0xMC0xNCAwOToxMToyMiIsInVwZGF0ZWRfYXQiOiIyMDE5LTEwLTE0IDA5OjExOjI1Iiwicm9sZUlkIjoxfSwic2NvcGVzIjpbXSwicm9sZSI6eyJpZCI6MSwicm9sZUNvZGUiOiJTVVBFUl9BRE1JTiIsInJvbGVOYW1lIjoiU3VwZXIgQWRtaW4iLCJyb2xlRGVzY3JpcHRpb24iOiJTdXBlciBhZG1pbiB1c2VyIHJvbGUgYWNjZXNzIGxldmVsIDAxIiwicm9sZWFibGVJZCI6MSwicm9sZWFibGVUeXBlIjoiQXBwXFxFRkxVc2VyIiwiY3JlYXRlZF9hdCI6IjIwMTktMTAtMTQgMDk6MTE6MjMiLCJ1cGRhdGVkX2F0IjoiMjAxOS0xMC0xNCAwOToxMToyMyJ9LCJwcm92aWRlciI6ImVmbF91c2VycyJ9.ozm02qIDKUhZO6MR9VXq5cd-Y9gtJ4WxgapJQw47i2FZHx0UQiNRcXoCT4mJ62ljdaMpjDZlbjcbVGFPdLXE0yc4Fmloi-T7MR2X65bliusC7ThEFx-_PEEd6OnSeEK13-NEtz1DlUqMHTLKuCSmFwVHIoSIs1vLsj9gjprawifV-5GQWgB6KkO8dqBsDFnIxyiw1rWIZ_UjrVaTpM5zOxPW16e0n4PBljqaDHioPYk_NSGkCTV0LArubaCAem74sbjnr07plXBsBix06kTAlHOr81M3q-zIW_nxBJMR6WI2HQtyh1RDCUWNoW_B-33iRCEKIxu1Cg4_P4A6yRDVu4iO-Zty8D8evCzOJqwoGKZSszS_CfmHZmXDAdTOa1bRXaTlEP3Iiv2Bozj2UhkH1I2Su3RHFoBs1v7Dkl9cMacCsQF4yZwhC0OKoPq3TzHLfb44uVFYCQSHNSUEniJ8Bc5XraSXmqtK7c17_U9RBd8QsYLiszi3rvQyHV5fATLeWF3cq0HyzXkrjjeBK9jA5x66oEUGrerJd3OceZUf0VMQZou0Mc8AZO8NKyHFGXv_4SvLUmGfK9Xloq1ziHLG2go_hg3H3fhNJhK-2uGRraYVlIaDFHe6ft4Fey5oJ4xBnxDxnxQ25WC2L7IhdORwuB-8lvMqdZ4hSZ5WWXBpZug",
      //   Accept: "application/json",
      //   "Access-Control-Allow-Headers": "*",
      //   'Content-Type': 'application/json',

      // };

      //  this.setting = payload.permissions
    }
  },

  methods: {
    menuRender: function(e) {
      // console.log(e)
      const vm = this;
      axios
        .get(`${process.env.VUE_APP_API_URL_LOGIN}admin/get-permissions`, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + e
          }
        })
        .then(function(response) {
          // console.log(response.data.data);
          let payload = vm.$jwt.decode(response.data.data);
          // console.log([5]);
          const L = (Object.values(payload).length - 1)
          // console.log(Object.values(payload)[L]['child_module'])
          vm.settingList = Object.values(payload)[L]['child_module']
          vm.menuList = payload;
        })
        .catch(function(error) {
          console.log(error);
          if(error){
            localStorage.removeItem('token')
            vm.$router.push('/login')
          }
        });

      // console.log(vm.menuList)
    },
    linked: function(e) {
      // console.log(e)
      this.$router.push({ path: "/" + e });
    },
    close() {
      this.items.forEach(item => {
        if (item.active) {
          _.delay(function() {
            item.active = false;
          }, 300);
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
