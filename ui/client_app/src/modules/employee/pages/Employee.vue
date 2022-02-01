<template>
  <v-container>
    <v-row class="pa-3">
      <v-col>
        <span class="text-h5 font-weight-bold mr-2">Employees</span>
        <v-btn color="pink" x-small dark fab @click="onAdd">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div v-if="employees.length > 0">
      <employee-list :items="employees" />
    </div>
    <div v-else>There is no any employee in the system.</div>
    <v-dialog v-model="dialog" persistent width="500" max-width="45%">
      <add-employee @onCancel="onCancel"></add-employee>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    EmployeeList: () => import("../../../components/employee/EmployeeList.vue"),
    AddEmployee: () =>
      import("../../../components/employee/AddUpdateEmployeeForm.vue"),
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
    ...mapState("employeeStore", {
      employees: "employees",
    }),
  },
  async created() {
    await this.$store.dispatch("employeeStore/fetchEmployees");
  },
};
</script>
