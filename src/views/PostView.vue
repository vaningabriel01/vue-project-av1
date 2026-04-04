<template>
  <main class="post">
    <h1>{{ post.titulo }}</h1>
    <p>{{ post.conteudo }}</p>

    <router-link to="/">← Voltar</router-link>
  </main>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    }
  },

  created() {
    const id = this.$route.params.id

    const posts = [
      {
        id: "1",
        titulo: "Exploração no Pré-Sal",
        conteudo: "Detalhes completos sobre o projeto no pré-sal..."
      },
      {
        id: "2",
        titulo: "Energia Sustentável",
        conteudo: "Investimentos em energia limpa e renovável..."
      },
      {
        id: "3",
        titulo: "Tecnologia Offshore",
        conteudo: "Avanços tecnológicos em plataformas marítimas..."
      }
    ]

    this.post = posts.find(p => p.id === id)
  }
}
</script>

<style>
.post {
  padding: 20px;
}

a {
  display: inline-block;
  margin-top: 20px;
  color: blue;
}
</style>
