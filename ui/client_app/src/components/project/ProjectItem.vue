<template>
  <v-card elevation="2" outlined shaped>
    <v-card-title> {{ title }}</v-card-title>
    <avatar username="Mridul Srivastava"></avatar>
  </v-card>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  name: "ProjectItem",
  props: {
    title: String,
    employees: Array,
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped></style>
