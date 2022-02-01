<template>
  <v-card elevation="2">
    <v-container>
      <v-row>
        <v-col cols="3"
          ><avatar
            :username="employee.name"
            :size="50"
            :title="employee.name"
          ></avatar
        ></v-col>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12">{{ employee.name }}</v-col>
            <v-col cols="12">({{ employee.id }})</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  name: "EmployeeItem",
  components: {
    Avatar,
  },
  props: {
    employee: Object,
  },
};
</script>

<style lang="scss" scoped></style>
