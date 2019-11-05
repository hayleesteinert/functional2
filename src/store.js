import { InternshipData } from './InternshipData.js';
// import from data

//export out
export const store = {
    state: {
        InternshipData
    },
    getFavorites () {
      //anytime you need to access data or set data you can.
      //getters get data
      //setters change data

      return this.state.InternshipData.find((internship) => internship.isFavorite);

      // return - give back
      // this = any property in store

      /////////////////////////////////
      // find() finds the first thing that matches it's callback function.
      // gives the first thing and then quits looking.
      ////////////////////////////

      // want to use this in Entry

    },

    //dayID is a temp variable, can be whatever you want
    //this = entire store object

    ///////////////////////
    //map says to go through all data and do something.
    //requires you to run a functions
    //array-element.map(function(paramater))
    // if paramater.id (or whatever) === (is equal to) thing.id
    //     so if these are equal you know it's right
    //     array refering to whole data, that's what it's iterarting thru to look at things id, active, etc.
    ///////////////////////

    setFavorites (InternshipId) {
      //this.state.InternshipData.map((internshipObj) => { //(name of function) => return an obj.
      //internshipObj.id === InternshipId ? internshipObj.isFavorite = true : internshipObj.isFavorite = false;

      this.state.InternshipData.map( function(objInternship){
        if(objInternship.id === InternshipId)
        {
          if(objInternship.isFavorite===false)
          {
            objInternship.isFavorite=true;
          } else {
            objInternship.isFavorite=false;
          }
        }
      });
        //get the id property
        // if it's equal to thingID
        //? (then)
        //set active property equal to true
        //otherwise active is equal to false

        //so if whatever you click on, the id is equal to the day, active is true


   },

////////////// ???? //////////////////////////////////
  //  unsetFavorites (InternshipId) {
  //    this.state.InternshipData.map((internshipObj) => {
  //      internshipObj.id === InternshipId ? internshipObj.isFavorite = false : internshipObj.isFavorite = true;
  //
  //    });
  // },
//////////////////////////////////////////////////////

// FavObj (objIntership) {
//   this.state.InternshipData.map( function(objInternship){
//     if(objInternship.id === InternshipId)
//     {
//       objInterhsip.views++;
//     }
//   });


   submitComment (commentDetails) {
     const favInt = this.getFavorites();
     favInt.comments.push({ "details": commentDetails, });
   },

   // submitComment (commentDetails) {
   //   const comInt = this.internship.id;
   //   comInt.comments.push({ "details": commentDetails, });
   // },

}
