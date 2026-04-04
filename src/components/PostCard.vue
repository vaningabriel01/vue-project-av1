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
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
