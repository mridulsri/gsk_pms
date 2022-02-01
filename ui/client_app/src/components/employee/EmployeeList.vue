<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="employee in items" :key="employee.id">
        <employee-item :employee="employee"></employee-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmployeeItem from "./EmployeeItem.vue";
export default {
  name: "EmployeeList",
  components: {
    EmployeeItem,
  },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped></style>
