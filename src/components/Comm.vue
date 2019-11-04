<template>
<div>
  

  <div class="comment-section">

    <span>{{comments.details}}</span>

  </div>
</div>
</template>

<script>

//import {store} from '../store.js';

export default {
  name: 'Comm',
  props: ['comments', 'internship']
}
</script>


<style lang="scss" scoped>
.comment-section{
border: solid 1px grey;
margin: 1em;
padding: 1em;
text-align: left;
}
</style>
