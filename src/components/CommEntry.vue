<template>
  <div>

    <div>

      Leave a comment. You may only leave comments on the currently saved internship.
      <input type="text" placeholder="A short message here" v-model="inputEntry"/>

      <button class="submit"
        @click="submitComment(inputEntry)">
        Submit
      </button>

    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'CommEntry',
  data(){
    return{
      inputEntry:''
    }
  },
  methods: {
    submitComment (commentDetails) {
      store.submitComment(commentDetails);
        this.inputEntry = '';

    }
  }
}
</script>


<style lang="scss" scoped>
input[type=text] {
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
}

.submit {
  padding: .5em;
  color: white;
  background-color: #00407f;
  border: none;
}
</style>
