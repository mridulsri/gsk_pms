<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
      Author: Mridul Srivastava (<v-icon>mdi-square</v-icon>9350272167)
    </v-system-bar>

    <v-app-bar app clipped-right flat height="72">
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-navigation-drawer
        v-model="drawer"
        absolute
        color="grey lighten-3"
        mini-variant
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
        ></v-avatar>
      </v-navigation-drawer>

      <v-sheet color="grey lighten-5" height="128" width="100%"></v-sheet>

      <v-list class="pl-14" shaped>
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

    <!-- <v-footer app color="transparent" height="72" inset>
      Author: Mridul Srivastava (Contact: 9350272167)
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: null,
      navs: [
        {
          text: "Project",
          link: "/",
        },
        { text: "employee", link: "/employee" },
      ],
    };
  },
};
</script>
