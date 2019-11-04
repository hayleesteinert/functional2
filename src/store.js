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
      // find() finds the first thing that matches it's callback function.
      // want to use this in Entry

    },

    //dayID is a temp variable, can be whatever you want
    //this = entire store object
    //map says to go through all data and do something.


    setFavorites (InternshipId) {
      this.state.InternshipData.map((internshipObj) => { //(name of function) => return an obj.
        internshipObj.id === InternshipId ? internshipObj.isFavorite = true : internshipObj.isFavorite = false;


        //get the id property
        // if it's equal to thingID
        //? (then)
        //set active property equal to true
        //otherwise active is equal to false

        //so if whatever you click on, the id is equal to the day, active is true

      });
   },

////////////// ???? //////////////////////////////////
  //  unsetFavorites (InternshipId) {
  //    this.state.InternshipData.map((internshipObj) => {
  //      internshipObj.id === InternshipId ? internshipObj.isFavorite = false : internshipObj.isFavorite = true;
  //
  //    });
  // },
//////////////////////////////////////////////////////


   submitComment (commentDetails) {
     const favInt = this.getFavorites();
     favInt.comments.push({ "details": commentDetails, });
   },


}
