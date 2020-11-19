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
