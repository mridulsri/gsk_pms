<template>
  <v-dialog
    v-model="$store.state.loader"
    persistent
    :width="options.width"
    v-bind:style="{ zIndex: options.zIndex }"
  >
    <v-card :color="options.color" min-width="200">
      <v-card-text>
        <div class="text-center">
          <v-progress-circular
            :size="70"
            :width="5"
            style="margin: 0 auto"
            color="pink"
            indeterminate
          ></v-progress-circular>
        </div>
        <div class="text-center" style="color: pink">{{ message }}</div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      options: {
        color: "#ffffff",
        width: 200,
        zIndex: 9999,
      },
      message: "Loading...",
    };
  },
};
</script>
