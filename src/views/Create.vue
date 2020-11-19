<template>
<div class="create">
<h1>Create wish</h1>
<p> Create a wishlist for your next birthday</p>
<form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a wish"
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="Insert image of wish"
        required
      />
      <button type="button" v-on:click="createPost">Add to wishlist</button>
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
    background-color:#0b645a;
}

h1{
    color:white;
}

p{
    color:lightgrey;
    font-weight: 500;
    margin-bottom: 35px;
}

.create input{
    width: 70%;
    border-radius: 50px;
    border: none;
    margin: 10px;
    padding: 15px;
    background-color: #53918a;
}

::placeholder, input[type=text] {
    color: white;
    font-size: 14px;
}

form [type=button]{
    color:#07554B;
    font-weight: 400;
    font-size: 14px;
}

button{
    width: 50%;
    margin: 30px;
    padding: 12px;
    border-radius: 50px;
    background-color: #FD9566;
    border:none;

}

</style>