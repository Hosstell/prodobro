<template>
  <v-app-bar
    color="#47555E"
    dark
    app
    :hide-on-scroll="$vuetify.breakpoint.xs"
    clipped-left
    flat
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-spacer />
    <n-link to="/" class="pr-2">
      <div>
        <v-img
          fill="white"
          max-width="60px"
          :src="require('@/assets/logo/icon.svg')"
          class="ml-5"
        />
      </div>
    </n-link>
    <v-toolbar-items>
      <v-btn to="/" text nuxt class="ml-0 hidden-sm-and-down font-weight-light"
        >Публикации</v-btn
      >
      <v-btn
        to="/news/"
        text
        nuxt
        exact
        class="ml-0 hidden-sm-and-down font-weight-light"
        >Новости</v-btn
      >
      <v-btn
        to="/events/"
        text
        nuxt
        exact
        class="ml-0 hidden-sm-and-down font-weight-light"
        >События</v-btn
      >
      <v-btn
        to="/event_map/"
        text
        nuxt
        exact
        class="ml-0 hidden-sm-and-down font-weight-light pr-2"
      >События на карте</v-btn
      >
      <search-field
        class="hidden-sm-and-down pt-3 pr-3"
        style="max-width: 420px"
      />
    </v-toolbar-items>
    <join-button v-if="!$$user.loggedIn" class="hidden-sm-and-down" />
    <v-btn
      v-if="$$user.loggedIn"
      color="green"
      @click="openWagtail()"
    >
      Написать статью
    </v-btn>
    <v-spacer />
    <!--    <notifications v-if="$$user.loggedIn" class="hidden-sm-and-down" />-->
    <user-button v-if="$$user.loggedIn" class="hidden-sm-and-down" />
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Notifications from '../notifications/Notifications'
import DropDown from './DropDown'
import JoinButton from './JoinButton'
import SearchField from './SearchField'
import UserButton from './UserButton'

export default {
  name: 'AppBar',
  components: {
    Notifications,
    UserButton,
    SearchField,
    JoinButton,
    DropDown
  },
  computed: {
    ...mapState({
      buttons: state => state.layout.buttons
    })
  },
  methods: {
    ...mapMutations({
      toggleDrawer: 'layout/toggleDrawer'
    }),
    openWagtail() {
      window.open('http://localhost:8000/cms/pages/', '_blank')
    }
  }
}
</script>

<style>
.v-input__slot {
  min-height: 15px !important;
}
</style>
