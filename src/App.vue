<!--
issues:

- Unfavorite
- how many int. have comments
- sort by views

 -->

<template>
  <div id="app">
    <div class="headbox">

    <h1>Department of Communication Internships</h1>
    </div>

    <Internship />

  </div>
</template>

<script>
import Internship from './components/Internship.vue'
export default {
  name: 'app',
  components: {
    Internship
  },
  computed:{
    sortedInt(){
      return this.internship.slice().sort((a, b) => {
        return a.counter < b.counter
      });
    }
  },
}
</script>

<style lang="scss">
  * {
    box-sizing:border-box;
    font-family: Arial, sans-serif;
  }
  #app {
    html, body {
      height:100%;
      padding:0;
      margin:0;
    }

    .headbox{
      text-align: center;
      margin: 0 auto;
      font-size: 1.5em;
    color: #00407f;
    font-weight: 600;
    }

    .box{
      background-color: white;
      border: 2px solid grey;
      padding: 1.5em;
      height: 600px;
      overflow-y: scroll;
    }
}
</style>
