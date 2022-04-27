<template>
  <div class="home">
    <h1>
      <b>{{ message }}</b>
    </h1>
    <div>
      <b>Search by title:</b>
      <input type="text" v-model="nameFilter" list="names" />
      <datalist id="names">
        <option v-for="recipe in recipes" :key="recipe.id">{{ recipe.name }}</option>
      </datalist>
    </div>
    <div>
      <button v-on:click="setSortAttribute('name')">Sort By Name</button>
    </div>
    <div
      v-for="recipe in orderBy(filterBy(recipes, nameFilter, 'name'), sortAttribute)"
      v-on:click="currentRecipe = recipe"
      v-bind:class="{ selected: recipe === currentRecipe }"
      :key="recipe.id"
    >
      <div class="row">
        <div v-for="recipe in recipes" v-on:click="currentRecipe = recipe" v-bind:key="recipe.id" class="col-sm-4 mb-4">
          <div class="card">
            <div v-bind:class="{ selected: recipe === currentRecipe }">
              <!-- <img :src="recipe.image_url" v-bind:alt="recipe.title" class="card-img-top" /> -->
              <div class="card-body">
                <h5 class="card-title">{{ recipe.name }}</h5>
                <p class="card-text">Contributor: {{ recipe.contributor }}</p>
                <a v-bind:href="`/recipes/${recipe.id}`" class="btn btn-primary">More info</a>
              </div>
            </div>
          </div>
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
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
        console.log("All recipes", response);
      });
    },
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
  },
};
</script>
