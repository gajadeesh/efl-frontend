<template>
    <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Ports/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Ports from "@/components/portComp"
export default {
    data(){
        return{

        }
    },
    components:{
        Nav,
        Sidebar,
        Ports
    }
}
</script>
<style scoped>

</style>