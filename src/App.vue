<template>
  <div class="container">
    <div>
      <nav class="navbar">
        <div class="logo-container">
          <img src="/logo.png" class="logo" alt="Vite logo" />
        </div>

        <div class="nav-links">
          <ul>
            <li>
              <router-link to="/">Inicio</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      personajes: [],
    };
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav-links {
  font-size: 30px;
}
</style>
