<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <CBooking />
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import CBooking from "@/components/CreateBookingComp";
export default {
  components: {
    Nav,
    Sidebar,
    CBooking
  }
};
</script>
<style scoped>
</style>