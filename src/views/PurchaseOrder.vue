<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Poc/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Poc from "@/components/PurchaseOrderComp";

export default {
    components: {
    Nav,
    Sidebar,
    Poc
  }
};
</script>
<style>
</style>