<template>
  <v-app>
    <v-container fill-height>
      <v-layout row child-flex justify-center align-center wrap>
        <v-progress-circular :size="150" :width="7" color="dimFont" indeterminate></v-progress-circular>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      // token: ""
    };
  },
  mounted() {
    // console.log(this.$route.params.token)
    // this.$route.query.page
    if (this.$route.params.token) {
      let token = this.$route.params.token;
      this.$router.push({ name: "passwordReset", query: { token: token } });
    }
  }
};
</script>