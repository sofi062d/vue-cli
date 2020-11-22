<template>
<div>
  <h2>Items</h2>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
        <img :src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
        
        <!--Update button-->
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button>Update</button>
        </router-link>
        
        <!--Delete button-->
        <button type="button" v-on:click="deletePost(post.id)">Delete</button>
      </article>
  </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data () {
    return {
      posts: []
    };
  },
  
  methods:{
    deletePost(id){
      postRef.doc(id).delete();
    }
  },

  firestore: {
    posts: postRef
  }
}
</script>

<style>
.grid-container img{
  width: 70%;
}

.item{
  border: solid grey 1px;
  margin: 20px;
}

button {
  color:#07554B; 
  font-weight: 500;
    font-size: 14px;
}

</style>