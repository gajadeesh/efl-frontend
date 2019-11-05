<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <UserManagement/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import UserManagement from "@/components/UsermangementComp";
export default {
  components: {
    Nav,
    Sidebar,
    UserManagement
  }
};
</script>
<style>
</style>