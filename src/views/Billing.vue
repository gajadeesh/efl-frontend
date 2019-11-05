<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Billing/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Billing from "@/components/BillingComp";
export default {
    components: {
    Nav,
    Sidebar,
    Billing
  }
};
</script>
<style>
</style>