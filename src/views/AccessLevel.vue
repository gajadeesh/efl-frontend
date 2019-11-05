<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <AccessLevel />
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import AccessLevel from "@/components/AccessLevelComp.vue";
export default {

    
  components: {
    Nav,
    Sidebar,
    AccessLevel
  }
};
</script>
<style scoped>
</style>