<template>
  <v-container>
    <v-row class="pa-3">
      <h1>Projects</h1>
      <v-spacer />
      <v-btn color="pink" small dark top right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <div v-if="projects.length > 0">
      <project-list :items="projects" />
    </div>
    <div v-else>There is no any project in the system.</div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ProjectList: () => import("../components/project/ProjectList.vue"),
  },
  data() {
    return {
      loading: this.$store.state.loading,
      // projects: this.$store.state.projectStore.projects,
    };
  },
  computed: {
    ...mapState("projectStore", {
      projects: "projects",
    }),
  },
  async created() {
    await this.$store.dispatch("projectStore/fetchProjects");
  },
};
</script>
