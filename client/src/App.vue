<template>
  <v-app>
    <!-- Horizontal navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <vtoolbar-side-icon></vtoolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      />
      <v-spacer />

      <!-- Horizontal NavBar links -->
      <vtoolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </vtoolbar-items>
    </v-toolbar>

    <!-- App content -->
    <main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sing In", link: "/singin" },
        { icon: "create", title: "Sign Up", link: "/signup" },
      ];
    },
  },
};
</script>
