<template>
<v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <Quotation/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp"
import Quotation from "@/components/QuotationComp"

export default {
    components: {
    Nav,
    Sidebar,
    Quotation
  }
}
</script>
<style>

</style>