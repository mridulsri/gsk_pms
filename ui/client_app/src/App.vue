<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
      Develop by: Mridul Srivastava (<v-icon>mdi-cellphone</v-icon>9350272167)
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-list class="pl-5" shaped>
        <v-list-item v-for="(nav, index) in navs" :key="`nav_${index}`" link>
          <v-list-item-content>
            <!-- <v-list-item-title>{{ nav.text }}</v-list-item-title> -->
            <router-link :to="nav.link">{{ nav.text }}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <router-view :key="$route.fullPath" />
    </v-main>
    <app-loader ref="appLoader"></app-loader>
  </v-app>
</template>

<script>
import AppLoader from "./components/AppLoader.vue";
export default {
  name: "App",
  components: {
    AppLoader,
  },
  data() {
    return {
      drawer: null,
      navs: [
        {
          text: "Project",
          link: "/",
        },
        { text: "Employee", link: "/employee" },
      ],
    };
  },
};
</script>
