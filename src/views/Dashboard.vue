<template>
  <v-app>
    <Nav />

    <!-- <v-container> -->

    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Dashboard />
      </v-layout>
    </v-container>

    <!-- </v-container> -->
  </v-app>
</template>

<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Dashboard from "@/components/DashboardComp";
export default {
  components: {
    Nav,
    Sidebar,
    Dashboard
  }
};
</script>

<style>
</style>
