<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Clients/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Clients from "@/components/ClientComp";
export default {
    components: {
    Nav,
    Sidebar,
    Clients
  }
};
</script>
<style>
</style>