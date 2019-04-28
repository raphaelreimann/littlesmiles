<template>
  <div class="profile">
    <h1 class="header">This is an Profile page</h1>
    <p class="history">History</p>
    <ul id="list">         
        <router-link 
          tag="li" 
          class="list-item" 
          v-for="challenge in completedChallenges" 
          :key="challenge.id" 
          :to="{ name: 'challenge', params: { id: challenge.id }}">
            <span class="title">{{ challenge.title}}</span><br>
            <span class="subtitle">{{ challenge.subtitle}}</span>
        </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
.header{
  color: white;
  margin-bottom: 0px;
}
.history{
  text-align: left;
  margin-left: 25px;
  margin-bottom: -20px;
  font-weight: bold;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Challenges',
  computed: {
    completedChallenges(){
      return this.$store.getters.completedChallenges; 
    }
  },
  methods: {
  
  },
};
</script>
