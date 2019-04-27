<template>
<div class="wrapper">
  <div class="topNav">
    <h1>Reasons for decline</h1>
  </div>

  <form>
    <div class="choice">
      <input   type="radio" name="option" id="option1">
        <label  for="option1">Out of my comfort zone </label>
    </div>
    
    <div class="choice">
           <input  type="radio" name="option" id="option2">
           <label  for="option2"> wasn´t able to do it</label>
    </div>
    
    <div class="choice">
      <input  type="radio" name="option" id="option3">
        <label  for="option3">other </label>
    </div>
  </form>

  <div class="spaceholder">



  </div>

    <h2>Are you sure ?</h2>
    <div class="box">
          <button class="buttonOne" type="button" onclick="alert('Hello World!')">Decline Challenge</button>
      </div>

      <div class="box">
          <button class="buttonTwo" type="button" onclick="alert('Hello world!')"> cancel  </button>
      </div>

  </div>


</template>




<style> 
.topNav {
  background-image: linear-gradient(to right, #1F1B3E, #D13089)
}
h1 {
  color: black;
}
li {
  list-style: none;
  
}
.choice {
padding-left: 100px;
text-align: left;
}
.label{
  padding-left: 100px;
}
.spaceholder {
  height: 400px;
}
.buttonOne {
background-color: green;
height: 50px;
width: 100px;
}
.buttonTwo{
  background-color: red;
  height: 50px;
  width: 100px;
}

.box {
  float: left;
  padding: 25px; 
  width: 50%;
   box-sizing: border-box;
}
button {
  font-size: 15px;
  
}

</style>