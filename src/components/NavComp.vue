<template>
    <v-layout row>
        <v-flex xs2 class="pl-5 pt-2">
          <input type="text" placeholder="Search for orders..." v-model="search" class="my-input" />
          
        </v-flex>

        <v-flex xs9>
          <v-layout align-center justify-end class="pt-4 ">
             <v-badge overlap left color="#F79727">
                <template v-slot:badge>
                2
                </template>
              <v-icon class="pa-2" medium>mail_outline</v-icon>
              </v-badge>
                 
             <v-badge overlap left color="#F79727">
                <template v-slot:badge>
                6
                </template>
             <v-icon class="pa-2" medium>notifications</v-icon>
             </v-badge>
             <v-badge overlap left color="#F79727">
                <template v-slot:badge>
                8
                </template>
             <v-icon class="pa-2" medium>event</v-icon>
             </v-badge>
            </v-layout>
            
        </v-flex>
        <v-layout md1 class="pt-4 pr-4" align-right justify-end>
          <v-icon large>exit_to_app</v-icon>
        </v-layout>
    </v-layout>
</template>

<script>
export default {
  data(){
    return{
      search: ''
    }
  }
}
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
