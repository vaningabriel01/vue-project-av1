<template>
  <HeaderMain />

  <main>
    <router-view />
  </main>

  <FooterMain />
</template>

<script>
import HeaderMain from './components/HeaderMain.vue'
import FooterMain from './components/FooterMain.vue'

export default {
  components: {
    HeaderMain,
    FooterMain
  }
}
</script>
