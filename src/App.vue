<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Recipe Book</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/recipes">Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/recipes">Recipes</router-link>
      |
      <router-link to="/recipes/new">Add A Recipe</router-link>
      <router-view />
    </nav>
  </div> -->
  </div>
</template>

<style>
body {
  background-image: url("./assets/pexels-suzy-hazelwood-5736172.jpg");
}
</style>
