<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div class="login-section" v-if="$auth.loggedIn">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="logout">Logout</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="login-section" v-else>
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="login">Login</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="signup">Sign Up</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <v-container class="fill-height" fluid>
            <!-- <v-row align="center" justify="center">
              <v-col class="text-center">
                <v-tooltip left>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-col>
            </v-row>-->
            <nuxt />
          </v-container>
        </v-main>
        <v-footer color="indigo" app>
          <span class="white--text">&copy; 2019</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>
<script>
export default {
  props: {
    source: String
  },

  data: function() {
    return {
      drawer: null
    };
  },
  computed: {
    // drawer: function() {
    //   // return this.drawer
    // }
  },
  methods: {
    drawerToggle: function(event) {
      console.log("Drawer toggle called");
      this.drawer = !drawer;
    }
  }
};
</script>

<style>
</style>
