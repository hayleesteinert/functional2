<template>
  <div>
  <span class="currentfav">  Current Favourite: {{titleActiveIntern}} in {{locationActiveIntern}}</span>
<hr>

  <div id="internships" class="container internship-listings">
      <InternshipEntry
         v-for="internship in sharedState.InternshipData"
         v-bind:key="internship.id"
         :internship="internship"  />
<!-- can also have v-for=(intership, index) in _____ and then give it a key and props. -->
         <CommEntry />

  </div>
</div>

</template>

<script>
import { store } from '../store.js';

import InternshipEntry from './InternshipEntry.vue';
import CommEntry from './CommEntry.vue';

export default {
  name: 'Internship',
  data(){
      return {
          sharedState: store.state
      }
  },
  components: {
      InternshipEntry,
      CommEntry
  },
  computed: {
    titleActiveIntern() {
      return store.getFavorites().title;
    },
    locationActiveIntern() {
      return store.getFavorites().location;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .currentfav{
      padding: .5em;
      font-weight: bold;
      color: orange;
      text-align: center;

    }
    .internship-listings {
      padding-top: 2em;
        display:grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap:1.2em;
        @media screen and (max-width:414px)
        {
            width:98%;
            margin:auto;
        }
        @media screen and (min-width:415px)
        {
            width:90%;
            margin:auto;
        }
        @media screen and (min-width:769px)
        {
            width:80%;
            margin:auto;
        }
        @media screen and (min-width:1201px)
        {
            width:70%;
            margin:auto;
        }
    }
</style>
