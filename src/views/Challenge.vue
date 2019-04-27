<template>
  <div class="challenge_detail">
    <h1>{{ challenge.title}}</h1>
    <h2 class="subtitle">{{ challenge.subtitle}}</h2>
    <div class="description">{{ challenge.description}}</div>
    <div class="category">{{ challenge.category}}</div>
    <div class="actions">
      <router-link @click="onComplete" tag="button" :to="{ name: 'challengeCompleted', params: { id: challenge.id }}">Complete</router-link>
      <router-link @click="onReject" tag="button" :to="{ name: 'challengeRejected', params: { id: challenge.id }}">Reject</router-link>
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
      this.$router.push('/');
    },
    onReject(){
      this.removeFromChallenges();
      this.$router.push('/');
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

