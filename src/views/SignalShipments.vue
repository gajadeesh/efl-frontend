<template>
<v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar/>
        <SignalShipmentsComp/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import SignalShipmentsComp from "@/components/SingleShipmentComp"
export default {
    components: {
    Nav,
    Sidebar,
    SignalShipmentsComp
  }
}
</script>
<style>

</style>