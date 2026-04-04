<template>
  <main>
    <h2>Bem-vindo à Petro Energy</h2>

    <section class="feed">
      <h3>Últimos Projetos</h3>

      <div class="posts">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
  </main>
</template>

<script>
import PostCard from '../components/PostCard.vue'

export default {
  components: { PostCard },

  data() {
    return {
      posts: [
        { id: 1, titulo: "Exploração no Pré-Sal", resumo: "Projeto inovador..." },
        { id: 2, titulo: "Energia Sustentável", resumo: "Investindo no futuro..." },
        { id: 3, titulo: "Tecnologia Offshore", resumo: "Avanços tecnológicos..." }
      ]
    }
  }
}
</script>
