<template>
  <Personajes
    v-for="personaje in paginated"
    v-bind:key="personaje.id"
    v-bind:personaje="personaje"
  ></Personajes>

  <div class="text-center fw-bold m-2">Actual: {{ current }}</div>
  <div class="text-center">
    <a @click="($event) => prev()" class="click me-5">Anterior</a>
    <a @click="($event) => next()" class="click">Siguiente</a>
  </div>
</template>

<script>
import axios from "axios";
import Personajes from "./Personajes.vue";

export default {
  name: "App",
  data() {
    return {
      personajes: [], //lo llenaremos con la api
      current: 1,
      pageSize: 5,
    };
  },
  mounted() {
    axios
      .get("https://hp-api.onrender.com/api/characters/")
      .then((res) => {
        //console.log(res.data.categories)
        this.personajes = res.data.personajes;
        //idCategory
        //strCategory "Beef" strCategoryDescription
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Personajes,
  },

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.personajes;
    },
  },
  methods: {
    prev() {
      this.current--;
    },
    next() {
      this.current++;
    },
  },
};
</script>

<style>
input {
  border: 0px;
  width: 200px;
  background-color: white;
  height: 30px;
  text-align: center;
}
input:focus {
  outline: none;
  color: black;
}
</style>
