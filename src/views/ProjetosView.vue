<template>
  <main class="projetos">
    <h1>Projetos Sociais</h1>

    <section class="cards">
      <article class="card">
        <h2>Projeto Verde</h2>
        <p>
          Iniciativa voltada para a preservação ambiental e redução de impactos
          da exploração de petróleo.
        </p>
      </article>

      <article class="card">
        <h2>Educação para o Futuro</h2>
        <p>
          Investimento em educação para comunidades locais, promovendo
          capacitação e oportunidades.
        </p>
      </article>

      <article class="card">
        <h2>Energia Sustentável</h2>
        <p>
          Desenvolvimento de tecnologias para produção de energia mais limpa
          e eficiente.
        </p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "ProjetosView"
}
</script>

<style>
.projetos {
  padding: 20px;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 250px;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
