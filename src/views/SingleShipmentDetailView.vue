<template>
    <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar/>
        <SingleShippingDetailViewComp/>
        </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import SingleShippingDetailViewComp from "@/components/SingleShippingDetailViewComp"
export default {
    components:{
        Nav,
    Sidebar,
        SingleShippingDetailViewComp
    }
}
</script>
<style scoped>

</style>