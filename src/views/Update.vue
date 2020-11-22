<template>
  <div class="update">
    <h1>Update</h1>
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
      <button type="button" v-on:click="updateBook(book.id)">
        Update book
      </button>
    </form>
  </div>
</template>

<script>
import { myBookRef } from "../firebase-db";
export default {
    name: "Update",
    
    props: {
        book: Object
    },
    methods: {
        triggerChooseImg () {
            this.$refs.fileInput.click();
        },
        previewImage () {
            const imageFile = this.$refs.fileInput.files[0];
            const fileReader = new FileReader();
            fileReader.onload = event => {
                this.book.img = event.target.result;
            };
            fileReader.readAsDataURL(imageFile);
        },
        updateBook (id) {
            myBookRef.doc(id).set({
                name: this.book.name,
                price: this.book.price,
                img: this.book.img
            });

            this.$router.push("/");
        }


    
    }
}
</script>

<style>
</style>