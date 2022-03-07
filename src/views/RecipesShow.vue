<template>
  <div class="recipes-show">
    <h1>{{ recipe.name }}</h1>
    <p>Contributor: {{ recipe.contributor }}</p>
    <p>Ingredients: {{ recipe.ingredients }}</p>
    <p>Directions: {{ recipe.directions }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      recipe: {},
    };
  },
  created: function () {
    axios.get("/recipes/" + this.$route.params.id).then((response) => {
      this.recipe = response.data;
    });
  },
  methods: {},
};
</script>
