<template>
  <div class="add">
    <h1>Add your listing</h1>
    <form>
      <input
        type="text"
        v-model="book.name"
        placeholder="Name of the book"
        required
      />
      <input type="number" v-model="book.price" placeholder="Price" required />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Photo
      </button>
      <div>
        <img :src="book.img" class="image-preview" alt="" />
      </div>
      <button type="button" v-on:click="createListing">Add book</button>
    </form>
  </div>
</template>

<script>
import { bookRef } from "../firebase-db";
import { myBookRef } from "../firebase-db";
export default {
    name: "Add",
    data() {
        return {
            book: {
                name: "",
                price: "",
                img: null
            }
        }
    },
    methods: {
        triggerChooseImg () {
            this.$refs.fileInput.click()
        },
        previewImage () {
            const imageFile = this.$refs.fileInput.files[0]
            const fileReader = new FileReader()
            fileReader.onload = (event) => {
                this.book.img = event.target.result
            }
            fileReader.readAsDataURL(imageFile)
        },
        createListing () {
            bookRef.add(this.book)
            myBookRef.add(this.book)
            this.$router.push("/mybooks")
        }
    }
}
</script>

<style>
.add {
  margin-top: 28%;
}

input[type="file"] {
  display: none;
}

input {
  background-color: transparent;
  border: 2px solid #7db5c1;
  color: #2d3b45;
  border-radius: 5px;
  padding: 5px 18px;
  margin-top: 20px;
  font-family: lato, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

input[type="number"] {
  margin-bottom: 20px;
}

.image-preview {
  width: 65%;
  padding: 10%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>