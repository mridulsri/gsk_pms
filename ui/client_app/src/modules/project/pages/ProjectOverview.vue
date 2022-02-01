<template>
  <v-container>
    <v-row v-if="project == null">
      <v-col>Record not found</v-col>
    </v-row>
    <v-row v-else-if="project != null">
      <v-col cols="12">
        <v-card>
          <v-card-title
            >Project overview:
            <v-btn color="pink" plain class="text-capitalize" @click="onEdit">
              Edit
            </v-btn></v-card-title
          >
          <v-container>
            <v-row>
              <v-col class="subtitle-2">
                {{ project.name }} - (#{{ project.id }})
                <div>
                  <small
                    ><strong>Start date:</strong> {{ project.startDate }}</small
                  >
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="Body 2">
                <div class="descriptionBox">
                  {{ project.description }}
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="mt-4">
          <v-card-title> Associated employees:</v-card-title>
          <employee-list :items="project.employees"></employee-list>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent width="500" max-width="45%">
      <add-project
        @onCancel="onCancel"
        @onUpdate="loadProject"
        :project="project"
        :mode="true"
      ></add-project>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProjectOverview",
  components: {
    EmployeeList: () => import("../../../components/employee/EmployeeList.vue"),
    AddProject: () =>
      import("../../../components/project/AddUpdateProjectForm.vue"),
  },
  data() {
    return {
      dialog: false,
      project: null,
    };
  },
  methods: {
    ...mapActions("projectStore", ["fetchProjectById"]),
    async loadProject() {
      this.project = await this.fetchProjectById(this.$route.params.id);
    },
    onEdit() {
      this.dialog = true;
    },
    onCancel() {
      this.dialog = false;
    },
  },
  created() {
    this.loadProject();
  },
};
</script>

<style lang="scss" scoped>
.descriptionBox {
  height: 100px;
  max-height: 200px;
  overflow-y: scroll;
}
</style>
