<template>
  <div>
    <h1>My Books</h1>
    <div class="grid-container">
      <article v-for="book in books" :key="book.id">
        <div class="book_div">
          <img :src="book.img" alt="" />
          <h3>{{ book.name }}</h3>
          <h4>{{ book.price }} kr</h4>
          <router-link :to="{ name: 'Update', params: { book: book } }">
            <button class="update">Update</button>
          </router-link>
          <button v-on:click="deleteListing(book.id)" class="delete">
            Delete
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { myBookRef } from "../firebase-db";
export default {
  data() {
    return {
      books: []
    };
  },
  firestore: {
    books: myBookRef
  },
  methods: {
        deleteListing (id) {
            myBookRef.doc(id).delete();
        }

    }

};


</script>

<style>
.grid-container {
  display: grid;
  margin-bottom: 22%;
  margin-top: 28%;
}

.grid-container img {
  max-width: 80%;
}

.book_div {
  margin: 20px auto;
  width: 70%;
  background-color: #f2f2f2;
  padding: 25px 0;
  border-radius: 10px;
  color: #2d3b45;
}

h3,
h4 {
  font-family: lato, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
}

.buy-button {
  background-color: #7db5c1;
  border: none;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  outline: none;
  font-family: lato, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

h1 {
  color: #2d3b45;
  border-bottom: 2px solid #b48b06;
  position: fixed;
  width: 90%;
  background-color: white;
  top: -2.7%;
  left: 5%;
  padding: 5% 0;
  font-family: lato, sans-serif;
  font-style: normal;
  font-weight: 600;
}

button {
  background-color: #7db5c1;
  border: none;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  outline: none;
  font-family: lato, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

.delete {
  background-color: transparent;
  border: 2px solid #7db5c1;
  color: #2d3b45;
  padding: 3.5px 18px;
  margin-left: 15px;
}
</style>
