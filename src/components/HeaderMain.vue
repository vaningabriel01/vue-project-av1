<template>
  <header>
    <nav class="nav">
      <h1>Petro Energy</h1>

      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/sobre">Sobre</router-link>
        <router-link to="/projetos">Projetos</router-link>
      </div>
    </nav>
  </header>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  background: #0b3d91;
  color: white;
  padding: 15px;
}

.menu a {
  margin-left: 15px;
  color: white;
  text-decoration: none;
}
</style>
