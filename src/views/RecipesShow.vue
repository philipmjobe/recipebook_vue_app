<template>
  <div class="recipes-show">
    <div class="card">
      <div class="card-body">
        <h1>{{ recipe.name }}</h1>
        <p>Category: {{ recipe.category }}</p>
        <p>Contributor:</p>
        <p>{{ recipe.contributor }}</p>
        <p>Ingredients:</p>
        <ul style="list-style-type: none">
          <li v-for="(ingredient, index) in recipe.ingredients_list" :key="index">{{ ingredient }}</li>
        </ul>
        <br />
        <p>Directions:</p>
        <ul style="list-style-type: none">
          <li v-for="(direction, index) in recipe.directions_list" :key="index">{{ direction }}</li>
        </ul>
        <br />
        <dialog id="recipe-notes">
          <form method="dialog">
            <p>
              Note:
              <input type="text" />
            </p>
            <button v-on:click="updateRecipe()">Add A Note</button>
            <button>close</button>
          </form>
        </dialog>
        <p>Notes:</p>
        <ul style="list-style-type: none">
          <li>{{ recipe.notes }}</li>
        </ul>
        <br />
        <br />
      </div>
    </div>
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
  methods: {
    updateRecipe: function (recipe) {
      axios.patch("http://localhost:3000/recipes/" + recipe.id, recipe).then((response) => {
        console.log("success", response.data);
        document.querySelector("#recipe-notes").showModal();
      });
    },
  },
};
</script>
