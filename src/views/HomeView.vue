<template>
  <div class="home">
    <h1>
      <b>{{ message }}</b>
    </h1>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Recipes
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="row">
      <div v-for="recipe in recipes" v-bind:key="recipe.id" class="col-sm-4 mb-4">
        <div class="card">
          <!-- <div v-bind:class="{ selected: recipe === currentRecipe }"> -->
          <!-- <img :src="recipe.image_url" v-bind:alt="recipe.title" class="card-img-top" /> -->
          <div class="card-body">
            <h5 class="card-title">{{ recipe.name }}</h5>
            <p class="card-text">Contributor: {{ recipe.contributor }}</p>
            <a v-bind:href="`/recipes/${recipe.id}`" class="btn btn-primary">More info</a>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
b {
  color: white;
}
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to The Recipe Book!",
      recipes: [],
      currentRecipe: {},
      nameFilter: "",
      sortAttribute: "name",
    };
  },
  created: function () {
    this.indexRecipes();
  },
  methods: {
    indexRecipes: function () {
      axios.get("/recipes").then((response) => {
        this.recipes = response.data;
        console.log("All recipes", this.recipes);
      });
    },
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
  },
};
</script>
