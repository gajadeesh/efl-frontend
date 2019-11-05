<template>
<v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar/>
        <Shipments/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import Shipments from "@/components/ShippingComp"
export default {
  name:"shipments",
    components: {
    Nav,
    Sidebar,
    Shipments
  }
}
</script>
<style>

</style>