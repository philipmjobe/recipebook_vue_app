<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/recipes">Recipes</router-link>
      |
      <router-link to="/recipesshow">Show</router-link>
    </nav>
    <router-view />
  </div>
</template>
