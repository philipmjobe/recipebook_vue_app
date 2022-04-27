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
        <br />
        <br />
        <input type="text" id="comment-box" placeholder="Add A Note To This Recipe" />
        <button id="post">Add</button>
        <ul id="unordered"></ul>
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
    addComment: function () {
      var post = document.getElementById("post");
      post.addEventListener("click", function () {
        var commentBoxValue = document.getElementById("comment-box").value;

        var li = document.createElement("li");
        var text = document.createTextNode(commentBoxValue);
        li.appendChild(text);
        document.getElementById("unordered").appendChild(li);
      });
    },
  },
};
</script>
