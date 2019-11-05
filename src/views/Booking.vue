<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Booking/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Booking from "@/components/BookingComp";

export default {
    components: {
    Nav,
    Sidebar,
    Booking
  }
};
</script>
<style>
</style>