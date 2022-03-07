<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      Search by title:
      <input type="text" v-model="titleFilter" list="names" />
      <datalist id="titles">
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
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-title">{{ recipe.name }}</h4>
          <p class="card-text">Contributor: {{ recipe.contributor }}</p>
          <router-link :to="`/recipes/${recipe.id}`">
            <a class="btn btn-primary">More Info</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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
      titleFilter: "",
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
