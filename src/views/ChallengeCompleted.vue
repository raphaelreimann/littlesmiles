<template>
  <div class="challenge_completed">
    <div class="nav">
      <router-link to="/">Go Back</router-link>
      <h3 class="headline">Personal Feedback</h3>
      <router-link to="/profile">Profile</router-link>
    </div>
    <span class="main-text">How difficult was the challenge for you?</span>
    <div class="btn-group">
      <button class="feedback-btn">Bad</button>
      <button class="feedback-btn">Okay</button>
      <button class="feedback-btn">Good</button>
    </div>
    <span class="main-text">Notes</span>
    <textarea name="" id="feedback-area" cols="30" rows="10" class="feedback-text">How did you feel in general?</textarea>
    <span class="main-text">Wanna do it again?</span>
    <div class="btn-group">
      <router-link to="/" tag="button">Check</router-link>
      <router-link to="/" tag="button">Cross</router-link>
    </div>
  </div>
</template>


<style lang="scss">
#feedback-area{
  text-align: left;
}
.feedback-btn{
  margin: 10px;
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

</style>

