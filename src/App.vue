<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/recipes">Recipes</router-link>
      |
      <router-link to="/recipes/new">Add A Recipe</router-link>
      <router-view />
    </nav>
  </div>
</template>
