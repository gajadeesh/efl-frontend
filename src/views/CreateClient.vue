<template>
    <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <CreateClient/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import CreateClient from "@/components/CreateClientComp"

export default {
    data(){
        return{
            
        }
    },
    components:{
        Nav,
        Sidebar,
        CreateClient
    }
}
</script>
<style scoped>

</style>