<template>
  <div>

   <div class="internship" :class="{isFavorite: internship.isFavorite}">
     <!-- v-bind shortcut, a class bind -> apply this class if internship.isfavourite is true -->
       <h2 class="internship-title">{{internship.title}} in <span class="internship-location">{{internship.location}}</span></h2>

       <p>{{ internship.majors }}</p>

       <p> <b>Description:</b> To provide support for various functions within the Technical Services department</p>


<p><b>Skills/Qualifications:</b>
We are looking for an energetic young person.

<p><b>Contact Information:</b>
www.company.com
 </p>

<div class="center">
       <button class="btnFavorite" @click="setFavorites(internship.id)">
         <!-- on click, use the function with the parameter of getting the ID. So we can see the ID is connected. -->

         <!-- add/remove based on condition. If the internship has a property that is equal to false, add to fav. ELSE remove. This is good for 2 options (ex. if greater than 20 add a border, like the upvote thingy). -->
           <span v-if="internship.isFavorite === false">
               Add As Favorite
           </span>
           <span v-else>
               Remove From Favorites
           </span>
       </button>

       <button class="btnFavorite" @click="counter += 1">
        View Info
       </button>

       <button type="button" @click="showInternship(internship.id)">What is the id?</button>

<!-- @click="showInternshipInfo{intersnhip.id}"
pass in id

in store
showinternshipinfo(internshipid)

map thru id, if id=id

objinterhsip.views++;


method:
showinterhsipInfo(intershipID) {
  store.showinterhshipInfo(insternshipID);
}

-->

<br>This internship has been viewed {{counter}} times
 <Comm v-for="comments in internship.comments"
   :key="internship.comments.indexOf(comments)"
   :comments="comments"
   :internship="internship"/>
</div>
   </div>
 </div>
</template>

<script>

 import {store} from '../store.js';
 import Comm from './Comm.vue';

export default {
    name:'InternshipEntry',
    props:['internship'],
    components: {
        Comm
    },
    methods: {
        setFavorites(internshipId) {
            store.setFavorites(internshipId);
        },
        showCurrentEntry(internshipID){
          store.getCurrentInternship(internshipID);
        },
        showInternship(internshipID){
          store.getCurrentInternship(internshipID);
        }
        // FavObj(objIntership) {
        //   store.FavObj(objIntership);
        // }
    },
    data() {
     return{counter: +0}
  },
}
</script>


<style lang="scss" scoped>

    .internship {
      background-color: white;
      border: 2px solid grey;
      overflow-y: scroll;
      height: 400px;
        box-sizing: border-box;
        padding:0.5em;
        font-family: Arial, sans-serif;
        h2 {
            letter-spacing: 0.02rem;
        }
        .btnFavorite {
          padding: 1em;
          color: white;
          background-color: #f58025;
          border: none;
          margin: .5em;
        }

        .btnFavorite:hover{
          color:  #00407f;
          text-decoration: underline;
        }

        .center{
          margin: 0 auto;
          text-align: center;
        }
    }

    //class that happens when something is fav'
    //outside of the internship component so it works... for some reason.
     .isFavorite {
        border: double 5px orange;

        .btnFavorite {
          padding: 1em;
          color: white;
          background-color: lightgrey;
          border: none;
        }
    }



</style>
