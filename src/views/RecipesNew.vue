<template>
  <div class="recipes-new">
    <form v-on:submit.prevent="createRecipe()">
      <h1>Add A Recipe</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newRecipeParams.name" />
      </div>
      <div>
        <label>Contributor:</label>
        <input type="text" v-model="newRecipeParams.contributor" />
      </div>
      <div class="ingredients">
        <label>Ingredients:</label>
        <input type="text" v-model="newRecipeParams.ingredients" />
      </div>
      <div>
        <label>Directions:</label>
        <input type="text" v-model="newRecipeParams.directions" />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" v-model="newRecipeParams.category" />
      </div>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
form {
  text-align: center;
}
input {
  width: 50%;
  padding: 5px 5px;
  margin: 0 auto;
}
button {
  align-self: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newRecipeParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createRecipe: function () {
      console.log("New Recipe Inbound");

      axios
        .post("/recipes", this.newRecipeParams)
        .then(() => {
          this.$router.push("/recipes");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
