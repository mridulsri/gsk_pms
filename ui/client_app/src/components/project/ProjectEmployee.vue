<template>
  <v-card>
    <v-card-text>
      <avatar
        v-for="employee in item.employees"
        :key="employee.id"
        :username="employee.name"
        :size="25"
      ></avatar>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  name: "EmployeeList",
  components: {
    Avatar,
  },
  props: {
    employees: Array,
    mode: String,
  },
  data() {
    return {
      selected: [],
      employees: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
