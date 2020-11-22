<template>
  <div class="items">
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
// @ is an alias to /src

export default {
  name: "Items",
  components: {
    PostList
  }


};

</script>

<style>

.items{
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 20px;
}

.items h2{
  color: #07554b;
  margin-bottom: 100px;
  font-size: 35px;
}

.items button {
  margin: 10px;
  width: 40%;
  margin-bottom: 120px;
}

</style>
