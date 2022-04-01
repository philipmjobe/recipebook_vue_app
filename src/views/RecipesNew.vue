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
      <div>
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
    <!-- <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form> -->
  </div>
</template>

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
