<template>
  <div
    class="row text-center bg-body d-flex justify-content-center"
    v-if="personaje"
  >
    <h1>{{ personaje.name }}</h1>
    <div class="" style="width: 40%">
      <img
        @click="abrirDetallesPersonaje"
        class="card-img-top"
        :src="personaje.image"
        alt=""
      />
    </div>
    <h3>Especie: {{ personaje.species }}</h3>
    <h3>Casa: {{ personaje.house }}</h3>
  </div>
</template>

<script>
export default {
  props: ["personaje"],
  methods: {
    abrirDetallesPersonaje() {
      this.$router.push("/personaje/" + this.personaje.id);
    },
  },
};
</script>
