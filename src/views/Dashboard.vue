<template>
    <v-app dark>
        <Nav/>
        <!-- <v-container> -->
            <br><br>
            <v-layout row>
            <Sidebar/>
            <Dashboard/>
            </v-layout>
        <!-- </v-container> -->
    </v-app>
</template>

<script>
import Nav from "@/components/NavComp";
import Sidebar from "@/components/SidebarComp"
import Dashboard from "@/components/DashboardComp"
export default {
    components:{
        Nav,
        Sidebar,
        Dashboard
    }
}
</script>

<style>

</style>
