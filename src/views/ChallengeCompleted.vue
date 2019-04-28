<template>
  <div class="challenge_completed">
    <!--div class="nav">
      <router-link to="/">Go Back</router-link>
      <h3 class="headline">Personal Feedback</h3>
      <router-link to="/profile">Profile</router-link>
    </div-->
    <div class="content">
          <span class="main-text">How difficult was the challenge for you?</span>
        <div class="btn-group">
          <button class="feedback-btn" id="feedback-btn-1">Bad</button>
          <button class="feedback-btn" id="feedback-btn-2">Okay</button>
          <button class="feedback-btn" id="feedback-btn-3">Good</button>
        </div>
        <span class="main-text">Notes (How did you feel in general?)</span>
        <div class="textarea">
          <textarea 
            name="" 
            id="feedback-area" 
            cols="42" 
            rows="10" 
            class="feedback-text">
          </textarea>
        </div>
        <span class="main-text">Wanna do it again?</span>
        <div class="btn-group, btn-decision">
          <router-link to="/" class="decision-btn" id="decision-btn-1" tag="button">&#128077;</router-link>
          <router-link to="/" class="decision-btn" id="decision-btn-2" tag="button">&#128078;</router-link>
        </div>
      </div>
    </div>
    
</template>


<style lang="scss">
body{
  background-image: linear-gradient(to left, #1F1B3E, #D13089);
}

.content{
  margin-top: 30px;
}
.textarea{
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 15%;
}
#feedback-area{
  width: 90%;
  margin-left: 0px;
  text-align: left;
  outline: none;
  resize: none;
  color: white;
  border-radius: 6px;
  border: rgba($color: #fff, $alpha: 0.8) solid 1px;
  background-color: rgba($color: #fff, $alpha: 0.2);
}
.decision-btn{
  margin: 10px;
	border-radius:30px;
  border: none;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:35px;
	text-decoration:none;
}
#decision-btn-1{
  padding: 2px 8px 8px 8px;
}
#decision-btn-2{
  padding: 5px 8px 8px 8px;
}

.feedback-btn{
  margin: 10px 10px 15% 10px;
	border-radius: 8px;
  border: none;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:17px;
	padding:16px 25px;
	text-decoration:none;
}
#feedback-btn-1{
  background-image:linear-gradient(to right, rgb(250, 39, 24), rgb(255, 97, 24));
}
#feedback-btn-2{
  background-image:linear-gradient(to right, rgb(2, 138, 9), rgb(15, 107, 7));
}
#feedback-btn-3{
  background-image:linear-gradient(to right, rgb(35, 11, 145), rgb(69, 8, 138));
}

.main-text{
  display: block;
  text-align: left;
  margin: 0px 0px 0px 20px;
}
.headline{
  display: inline;
  margin: 10px;
}

.btn-decision{
  margin: 10px;
}

</style>

