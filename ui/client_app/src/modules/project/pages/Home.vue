<template>
  <v-container>
    <v-row class="pa-3">
      <v-col>
        <span class="text-h5 font-weight-bold mr-2">Projects</span>
        <v-btn color="pink" x-small dark fab @click="onAdd">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <router-view :key="$route.fullPath"></router-view>
    <v-dialog v-model="dialog" persistent width="500" max-width="45%">
      <add-project @onCancel="onCancel"></add-project>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProjectHome",
  components: {
    AddProject: () =>
      import("../../../components/project/AddUpdateProjectForm.vue"),
  },
  data() {
    return {
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
  async created() {
    await this.$store.dispatch("projectStore/fetchProjects");
    await this.$store.dispatch("employeeStore/fetchEmployees");
  },
};
</script>
