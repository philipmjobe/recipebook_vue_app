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

<style>
body {
  background-image: url("./assets/pexels-suzy-hazelwood-5736172.jpg");
}
</style>
