<template>
  <!-- <v-dialog v-model="dialog" persistent width="500" max-width="45%"> -->
  <v-card>
    <v-card-title> Add Project </v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            label="Name"
            maxlength="80"
            outlined
            dense
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
            v-model="description"
            label="Description"
            rows="4"
            maxlength="300"
            no-resize
            outlined
            dense
            hide-details="auto"
          ></v-textarea
        ></v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Start date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
                hide-details="auto"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu = false"
            ></v-date-picker> </v-menu
        ></v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-autocomplete
            v-model="selectedEmployees"
            :items="employees"
            item-text="name"
            item-value="id"
            label="Employee"
            placeholder="Select employee for this project"
            multiple
            hide-details
            small-chips
            outlined
            dense
            return-object
            :search-input.sync="search"
          ></v-autocomplete
        ></v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-btn
        rounded
        color="pink"
        dark
        small
        @click="onSubmit"
        class="text-capitalize"
        :disabled="btnDisabled"
      >
        Save
      </v-btn>
      <v-btn
        rounded
        color="blue"
        plain
        @click="onCancel"
        class="text-capitalize"
      >
        Cancel
      </v-btn>
    </v-card-actions>
    <v-fade-transition mode="out-in">
      <v-container v-if="errors.length > 0">
        <v-row>
          <v-col class="caption red--text">
            Complete the following
            {{ errors.length === 1 ? "field" : "fields" }}:
            <ul>
              <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-fade-transition>
  </v-card>
  <!-- </v-dialog> -->
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AddProjectForm",
  props: {
    project: {
      type: Object,
      default: null,
    },
    mode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: true,
      menu: false,
      search: "",
      errors: [],
      btnDisabled: false,
      name: "",
      description: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      selectedEmployees: [],
    };
  },
  computed: {
    ...mapState("employeeStore", ["employees"]),
  },
  methods: {
    ...mapActions("projectStore", {
      addProject: "addProject",
      updateProject: "updateProjectById",
    }),
    async onSubmit() {
      const isValid = await this.validateForm();
      if (!isValid) return;
      this.btnDisabled = true;
      let param = {
        name: this.name,
        description: this.description,
        startDate: this.date,
        employees: this.selectedEmployees,
      };
      if (!this.mode) {
        const resp = await this.addProject(param);
        if (resp.status == 201) {
          this.$toasted.show("Project added successfully");
          this.resetForm();
          this.onCancel();
        } else {
          this.$toasted.show("Error on server");
        }
      } else {
        param.id = this.project.id;
        const resp = await this.updateProject(param);
        if (resp.status == 200) {
          this.$toasted.show("Project updated successfully");
          this.onCancel();
        } else {
          this.$toasted.show("Error on server");
        }
        this.$emit("onUpdate");
      }
      this.btnDisabled = false;
    },
    onCancel() {
      this.$emit("onCancel");
    },
    resetForm() {
      this.name = "";
      (this.description = ""),
        (this.date = new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10));
      this.selectedEmployees = [];
      this.errors = [];
    },
    async validateForm() {
      this.errors = [];
      if (this.name.length < 10 || this.name.length > 80)
        this.errors.push(
          "Name should be minimum 10 and maximum 80 character long."
        );
      if (this.description.length < 50 || this.description.length > 300)
        this.errors.push(
          "Description should be minimum 10 and maximum 80 character long."
        );
      if (this.date.length === 0) this.errors.push("Please choose start date.");

      return this.errors.length === 0;
    },
  },
  mounted() {
    if (this.project) {
      this.name = this.project.name;
      this.description = this.project.description;
      this.date = this.project.startDate;
      this.selectedEmployees = this.project.employees;
    }
  },
};
</script>

<style lang="scss" scoped></style>
