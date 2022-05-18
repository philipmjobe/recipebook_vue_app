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
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add A Note
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
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
