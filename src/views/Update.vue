<template>
  <div class="create">
    <h1>Update</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required />
      <input
        type="text"
        v-model="post.image"
        placeholder="Insert image link"
        required
      />
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" v-on:click="updatePost">Update post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object,
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    updatePost() {
      console.log(this.post);

      postRef.doc(this.post.id).set({
        description: this.post.description,
        image: this.post.image,
      });
      this.$router.push("/items");
    },
  },
};
</script>

<style>

img{
    width: 70%;
}

</style>