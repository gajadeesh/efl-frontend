<template>
    <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <EflAdminManagement/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import EflAdminManagement from "@/components/EflAdminManagementComp"
export default {
    data(){
        return{

        }
    },
    components:{
        Nav,
        Sidebar,
        EflAdminManagement
    }
}
</script>
<style scoped>

</style>