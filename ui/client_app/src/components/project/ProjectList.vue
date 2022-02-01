<template>
  <div>
    <v-row>
      <v-col cols="4" v-for="project in items" :key="project.id">
        <project-item :project="project" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  name: "ProjectList",
  components: {
    ProjectItem,
  },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped></style>
