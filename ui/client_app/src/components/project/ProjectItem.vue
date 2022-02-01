<template>
  <v-hover>
    <v-card
      elevation="2"
      outlined
      rounded
      ripple
      class="fill-height"
      :to="'/project/' + project.id"
    >
      <v-card-title>
        <small>#{{ project.id }}</small>
        <div class="text-truncate" :title="project.name">
          {{ project.name }}
        </div>
      </v-card-title>
      <v-card-subtitle>
        <div class="text-truncate">
          {{ project.description }}
        </div>
      </v-card-subtitle>
      <v-card-text>
        <ul v-if="project.employees && project.employees.length">
          <li
            v-for="employee in project.employees.slice(0, 3)"
            :key="employee.id"
          >
            <avatar
              :username="employee.name"
              :size="40"
              :title="employee.name"
            ></avatar>
          </li>
          <li v-if="extraEmployee > 0">
            +<avatar :username="extraEmployee" :size="40"></avatar>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  name: "ProjectItem",
  props: {
    project: Object,
  },
  components: {
    Avatar,
  },
  computed: {
    extraEmployee() {
      return this.project.employees.length > 3 ? this.project.length : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  overflow: hidden;
  padding-left: 0px;
}
li {
  display: inline-block;
  margin-right: -8px;
}
</style>
