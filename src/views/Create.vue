<template>
<div class="create">
<h1>Create item</h1>
<form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type an item here"
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="Choose image"
        required
      />
      <button type="button" v-on:click="createPost">Create item list</button>
    </form>
  </div>
</template>

<script>
import {postRef} from '../firebase-db'
export default {
    name:'Create',
    data () {
        return {
        post: {
            description:'',
            image: null
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
            this.post.image = event.target.result
        }
        fileReader.readAsDataURL(imageFile)
    },
    createPost (){
        postRef.add(this.post)
        this.$router.push('/')
    }
}
}
</script>

<style>
body{
    background-color:#3b5998;
}

h1{
    color:white;
}

.create input{
    width: 70%;
    border-radius: 12px;
    border: solid grey 1px;
    margin: 10px;
    padding: 15px;
}

button{
    width: 50%;
    margin: 20px;
    padding: 12px;
    border-radius: 7px;
}

</style>