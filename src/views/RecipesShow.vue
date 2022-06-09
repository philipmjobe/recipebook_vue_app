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
        <div class="add-note">
          <form v-on:submit.prevent="addNote()">
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            <div>
              <label>Add A Note:</label>
              <input type="text" v-model="currentRecipeParams.notes" />
            </div>
            <br />
            <button class="btn btn-danger" type="submit" value="Update">Add Note</button>
          </form>
        </div>
        <br />
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
      currentRecipeParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/recipes/${this.$route.params.id}`).then((response) => {
      this.recipe = response.data;
    });
  },
  methods: {
    addNote: function () {
      axios
        .patch("https://vast-shelf-30324.herokuapp.com/recipes/" + this.$route.params.id, this.currentRecipeParams)
        .then((response) => {
          // this.recipe.push(response.data);
          this.$router.push(`/recipes/${response.data.id}`);
          location.reload();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
