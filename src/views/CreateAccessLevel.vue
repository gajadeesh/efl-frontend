<template>
    <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <CreateAccessLevel />
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import CreateAccessLevel from "@/components/CreateAccessLevelComp";
export default {
    components:{
        Nav,
        Sidebar,
        CreateAccessLevel
    }
}
</script>
<style scoped>

</style>