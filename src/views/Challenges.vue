<template>
  <div class="challenges">
    <ul id="list">         
        <router-link 
          tag="li" 
          class="list-item" 
          v-for="challenge in currentChallenges" 
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
    currentChallenges(){
      const clone = [...this.$store.getters.challenges];
      return this.shuffle(clone).slice(0,3);     
    }
  },
  methods: {
    shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    },
  },
  data() {
    return {
      
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
  #list{
    list-style: none;
    padding-left: 0px;
  }
  .list-item {
    //background-color: red;
    margin: 10px;
    padding: 4px;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-color: grey;
  }

  .title{
    font-weight: bold;
    font-size: 1.3em;
    display: block;
  }
</style>


