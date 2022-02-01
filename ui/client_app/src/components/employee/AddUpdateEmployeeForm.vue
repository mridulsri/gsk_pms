<template>
  <v-card>
    <v-card-title>
      Add Employee
      <hr style="border: 1px solid black" />
    </v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="employeeId"
            label="Employee Id"
            maxlength="6"
            outlined
            dense
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            label="Name"
            maxlength="50"
            outlined
            dense
            hide-details="auto"
          ></v-text-field
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddEmployeeForm",
  data() {
    return {
      errors: [],
      employeeId: "",
      name: "",
      btnDisabled: false,
    };
  },
  methods: {
    ...mapActions("employeeStore", {
      addEmployee: "addEmployee",
    }),
    async onSubmit() {
      const isValid = await this.validateForm();
      if (!isValid) return;
      this.btnDisabled = true;
      const param = {
        id: this.employeeId,
        name: this.name,
      };
      try {
        const resp = await this.addEmployee(param);
        if (resp.status == 201) {
          this.$toasted.show("Employee added successfully");
          this.resetForm();
          this.onCancel();
        } else if (resp.status == 409) {
          this.$toasted.show(resp.data.message);
        } else {
          this.$toasted.show("Error on server");
        }
      } catch (error) {
        this.$toasted.show("Error on server");
      }

      this.btnDisabled = false;
    },
    onCancel() {
      this.$emit("onCancel");
    },
    resetForm() {
      this.employeeId = "";
      this.name = "";
      this.errors = [];
    },
    async validateForm() {
      this.errors = [];
      if (this.employeeId.length != 6)
        this.errors.push("Employee id should be 6 character long.");
      if (this.name.length < 3 || this.name.length > 80)
        this.errors.push(
          "Name should be minimum 3 and maximum 50 character long."
        );
      return this.errors.length === 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
