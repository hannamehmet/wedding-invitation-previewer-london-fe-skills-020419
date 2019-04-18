document.addEventListener('DOMContentLoaded', function() {
  init()
})

function init() {

  let firstName = document.getElementById('firstname');

  firstName.onkeyup = function(){
      document.getElementById('invitefirstname').innerText = firstName.value;
  }
  
  
  let secondName = document.getElementById('secondname');

  secondName.onkeyup = function(){
      document.getElementById('invitesecondname').innerText = secondName.value;
  }
  
  
  let lastName = document.getElementById('lastname');

  lastName.onkeyup = function(){
      document.getElementById('invitelastname').innerText = lastName.value;
  }
  
  
  let date = document.getElementById('date');

  date.onkeyup = function(){
      document.getElementById('invitedate').innerText = date.value;
  }

  let time = document.getElementById('time');

  time.onkeyup = function(){
      document.getElementById('invitetime').innerText = time.value;
  }
  
  
  let location = document.getElementById('location');

  location.onkeyup = function(){
      document.getElementById('invitelocation').innerText = location.value;
  }
  
}


  
   function classicStyle() {
  document.getElementById("invitation").classList=" column classicdesign";
 }

  function floralStyle() {
  document.getElementById("invitation").classList="column floraldesign";
 }
 
  function parchmentStyle() {
  document.getElementById("invitation").classList = "column parchmentdesign";
}
 

