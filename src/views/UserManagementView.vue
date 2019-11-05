<template>
  <v-app>
    <Nav />
    <v-container class="pl-0 pt-0">
      <v-layout row>
        <Sidebar />
        <UserManagementViewComp/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp";
import UserManagementViewComp from "@/components/UserManagementViewComp.vue";
export default {
  components: {
    Nav,
    Sidebar,
    UserManagementViewComp
  }
};
</script>
<style>
</style>