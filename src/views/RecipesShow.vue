<template>
  <div class="recipes-show">
    <h1>{{ recipe.name }}</h1>
    <p>Contributor: {{ recipe.contributor }}</p>
    <p>Ingredients:</p>
    <ul>
      <p>{{ recipe.ingredients }}</p>
    </ul>
    <p>Directions:</p>
    <ul>
      {{
        recipe.directions
      }}
    </ul>
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
