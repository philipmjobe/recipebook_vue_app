<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      Search by title:
      <input type="text" v-model="titleFilter" list="names" />
      <datalist id="titles">
        <option v-for="recipe in recipes" :key="reciped.id">{{ recipe.name }}</option>
      </datalist>
    </div>

    <div>
      <button v-on:click="setSortAttribute('name')">Sort By Name</button>
    </div>
    <div v-for="recipe in orderBy(filterBy(recipes, nameFilter, 'name'), sortAttribute)" v-on:click="currentRecipe =
    recipe" v-bind:class="{ selected: recipe === currentRecipe }" :key="recipe.id"
    >
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h4 class="card-title">{{ recipe.name }}</h4>
        <p class="card-text">Contributor: {{ recipe.contributor }}</p>
        <router-link :to"`/recipes/${recipe.id}`">
        <a class="btn btn-primary">More Info</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
