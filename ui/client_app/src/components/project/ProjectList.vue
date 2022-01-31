<template>
  <div><project-item /></div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  name: "ProjectList",
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    for (let index = 1; index <= 4; index++) {
      this.projects.push({
        name: `Project 10${index}`,
        employee: [
          { name: "Mridul Srivastava", src: "/img/user.png" },
          { name: "Advika", src: "" },
          { name: "Pushpita Chanda", src: "/img/user.png" },
        ],
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
