<template>
  <div class="challenge_detail">
    <h1 class="title">{{ challenge.title}}</h1>
    <h2 class="subtitle">{{ challenge.subtitle}}</h2>
    <div class="description">{{ challenge.description}}</div>
    <div class="actions">
      <router-link 
        @click.native="onComplete" 
        tag="button" 
        id="btn-accept" 
        class="flex-item"
        :to="{ name: 'challengeCompleted', params: { id: challenge.id }}"
      >
        <img src="/assets/logo.png" alt="Check" class="check">
      </router-link>
      <router-link 
        @click.native="onReject" 
        tag="button" 
        id="btn-reject" 
        class="flex-item"
        :to="{ name: 'challengeRejected', params: { id: challenge.id }}"
      >
        <img src="/assets/reject.jpg" alt="Reject" class="reject">
      </router-link>
      <div class="category">Category: {{ challenge.category}}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    challenge(){
      const self = this;
      return this.$store.state.challenges.find((item) => {
        return item.id === parseInt(self.$route.params.id);
      });
    }
  },
  methods: {
    onComplete(){
      this.$store.commit("addCompletedChallenge", this.challenge);
      this.removeFromChallenges();      
      //this.$router.push('/');
    },
    onReject(){
      this.removeFromChallenges();
      //this.$router.push('/');
    },
    removeFromChallenges(){
      const self = this;
      const filteredChallenges = this.$store.state.challenges.filter((item) => {
        return item.id !== parseInt(self.$route.params.id);
      });
      this.$store.commit("setChallenges", filteredChallenges);
    }
  },
    data() {
    return {
      
    };
  },
}
</script>

<style lang="scss">
.flex-item{
  margin: 0px 10px;

}
h1 {
  color: white;
}
.title{
  margin-top: 30%;
  font-size: 2em;
}
.subtitle{
  margin-top: 2%;
}
.description{
  margin-top: 4%;
  padding: 0px 32px;
  text-align: justify;
}
.actions{
  margin-top: 25%;
}
.category{
  margin-top: 5%;
}
#btn-accept{
  background-color:#44c767;
	border-radius:60px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:17px;
	padding:16px 16px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
#btn-reject{
  background-color: rgb(214, 26, 26);
	border-radius:60px;
	border:1px solid rgb(214, 26, 26);
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:17px;
	padding:16px 16px;
	text-decoration:none;
	//text-shadow:0px 1px 0px #2f6627;
}
</style>


