<template>
    <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar/>
      <v-layout align-center justify-center>
        <h1 class="display-2 white--text" >Error 404 Not Found</h1>
      </v-layout>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";

export default {
    components: {
    Nav,
    Sidebar
  }
}
</script>
<style>

</style>