<template>
  <article class="card">
    <h3>{{ post.titulo }}</h3>
    <p>{{ post.resumo }}</p>

    <router-link :to="'/post/' + post.id">
      Ler mais
    </router-link>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>
@import '../assets/postMain.css';
</style>
