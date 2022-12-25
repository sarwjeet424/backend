const mongoose=require('mongoose')

//==============================// isValidEmail //================================//

const isValidEmail = function (value) {
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  }


//==============================// isValidMobile //===============================//

const isValidMobile = function (mobile) {
    if (/^[0]?[6789]\d{9}$/.test(mobile)){
       return true
    }
   }
   
   //==========================// isValidString //===============================//

const isValidString = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

//==============================// isValidName //===============================//

const isValidName = function (name) {
  if (/^[a-zA-Z ]+$/.test(name)) {
    return true;
  }
};

//===============================// isIdValid //===============================//

const isIdValid = function (value) {
    return mongoose.Types.ObjectId.isValid(value); 
  }


//===============================// isValidDate //==============================

function isValidDate (date){
    return /^([0-9]{4}[-][0-9]{2}[-][0-9]{2})$/.test(date)
 }
module.exports={isValidEmail,isValidMobile,isValidString,isValidName,isIdValid,isValidDate}