<template>
  <v-container>
    <div v-if="projects.length > 0">
      <project-list :items="projects" />
    </div>
    <div v-else>There is no any project in the system.</div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Projects",
  components: {
    ProjectList: () => import("../../../components/project/ProjectList.vue"),
  },
  data() {
    return {
      loading: this.$store.state.loading,
      dialog: false,
    };
  },
  methods: {
    onAdd() {
      this.dialog = true;
    },
    onCancel() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapState("projectStore", {
      projects: "projects",
    }),
  },
};
</script>
