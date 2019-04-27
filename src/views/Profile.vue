<template>
  <div class="profile">
    <h1>This is an Profile page</h1>
    <p>Profil eines Benutzers.</p>
    <ul id="list">         
        <router-link 
          tag="li" 
          class="list-item" 
          v-for="challenge in completedChallenges" 
          :key="challenge.id" 
          :to="{ name: 'challenge', params: { id: challenge.id }}">
            <span class="title">{{ challenge.title}}</span>
            <span class="subtitle">{{ challenge.subtitle}}</span>
        </router-link>
    </ul>
  </div>
</template>

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
