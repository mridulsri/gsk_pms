<template>
  <div>
    <h1>Home</h1>
    <project-list />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    ProjectList: () => import("../components/project/ProjectList.vue"),
  },
};
</script>
