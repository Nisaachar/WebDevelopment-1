function dropHandler(ev) {
  console.log('File(s) dropped');
  var message = document.getElementById("message");

  ev.preventDefault();

  if (ev.dataTransfer.items) {
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
        message.innerHTML += file.name + " "
        message.style.display = "inline";
      }
    });
  } else {
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}

//to override the default drop feature of browser.
function dragOverHandler(ev) {
  console.log('File(s) in drop zone');
  ev.preventDefault();
}




function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

  }

// const now = new Date();

// // Format the time as hours, minutes, and seconds
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();
// const time = `${hours}:${minutes}:${seconds}`;

// document.getElementById('clock').textContent = time;


  function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

  function readMore2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 
  

  function readMore3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

  // `use strict`;
  // function refreshTime() {
  //   const timeDisplay = document.getElementById("time");
  //   const dateString = new Date().toLocaleString();
  //   const formattedString = dateString.replace(", ", " - ");
  //   timeDisplay.textContent = formattedString;
  // }
  //   setInterval(refreshTime, 1000);



  function refreshTime(){
    var datetime = new Date().toLocaleTimeString();
    console.log(datetime); // it will represent date in the console of developer tool
    document.getElementById("time").textContent = datetime; // represent on html page
 }

setInterval(refreshTime,1000)
  
  


