<template>
     <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
          <v-layout row>
            <v-layout align-start justify-start>
               <h1 class="white--text pt-2">List of Users</h1>
            </v-layout>
            <v-layout align-end justify-end>
               <v-btn color="orange white--text" large>Add New User</v-btn>
            </v-layout>
          </v-layout>
          <v-list avatar dense class="background pa-4 white--text">
          <v-list-item v-for="item in users" :key="item.username" link>
            <v-layout row >
              <v-flex md3 class="pa-3">
                
                <v-img 
                :src="item.image" 
                aspect-ratio="1"
                max-width="100"
                max-height="100"></v-img>
              </v-flex>
              <v-flex md2>
                 <v-layout row wrap align-center>
                  
                <p>{{item.username}}</p>
                </v-layout>
              </v-flex>
              <v-flex md2>
                <span>Level {{item.level}}</span>
                
              </v-flex>
              <v-flex md2>
                <p>{{item.status}}</p>
              </v-flex>
              <v-flex md3>
                <v-layout row>
                <v-btn depressed flat class="orange--text"  @click="userView(item.uid)">View</v-btn>
                <v-btn depressed flat class="orange--text" @click="userEdit(item.uid)">Edit</v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
          </v-list-item>
          </v-list>
      </v-flex>
    </v-content>
     </v-app>
</template>
<script>
export default {
    data(){
      return{
        users:[
          {
            uid:"1223344556677889",
            username:"Willie Anderson",
            image:"http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
            level:"01",
            status: "Active"
          },
          {
            uid:"1223344556677889",
            username:"Willie Anderson",
            image:"http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg",
            level:"01",
            status: "Active"
          },
          {
            uid:"1223344556677889",
            username:"Willie Anderson",
            image:"https://www.liulishenshe.com/Simplify_admin/images/profile/profile5.jpg",
            level:"01",
            status: "Active"
          },
          {
            uid:"1223344556677889",
            username:"Willie Anderson",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jfLKlViuwuFsj7LxN2EKxnYd5AT_htEOYciU8DNu36nRJDKb",
            level:"01",
            status: "Active"
          },
          {
            uid:"1223344556677889",
            username:"Willie Anderson",
            image:"https://www.dynamicyield.com/wp-content/authors/yaniv-23.jpg",
            level:"01",
            status: "Active"
          },
        ]
      }
    },
    created(){
      
    },
    methods:{
      userEdit:function(e){
        this.$router.push({name:"usermanagementedit", params:{ uedit: e}})
      },
      userView:function(e){
        this.$router.push({name:"usermanagementview", params:{ uedit: e}})
      }
    }
}
</script>
<style scoped>

</style>