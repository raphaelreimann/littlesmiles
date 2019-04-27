<template>
  <div class="challenges">
    <ul id="list">         
        <router-link 
          tag="li" 
          class="list-item" 
          v-for="challenge in currentChallenges" 
          :key="challenge.id" 
          :to="{ name: 'challenge', params: { id: challenge.id }}"
          v-bind:class="{
           'gradient-one': challenge.category === 'Appreciation',
           'gradient-two': challenge.category === 'Friends & Family'
          }"
        >
            <span class="title">{{ challenge.title}}</span>
            <span class="subtitle">{{ challenge.subtitle}}</span>
            <!--span class="description">{{ challenge.description}}</span-->
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
    height: 800px;
    padding-left: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }
  .list-item {
    //background-color: red;
    margin: 0px;
    text-align: left;
    padding: 30px;
    color: white;
    background-image: linear-gradient(to right, red, darkred);
    height: 30%; 
    .gradient-one{
      background-image: linear-gradient(to right, purple, blue);
    } 
    .gradient-two{
      background-image: linear-gradient(to right, green, darkblue);
    } 
  }

  .title{
    font-weight: bold;
    font-size: 1.2em;
    display: block;
    margin-bottom: 5px;
  }
  .subtitle{
    font-weight: bold;
    font-size: 0.9em;
    display: block;
  }
  .description{
    font-weight: lighter;
    font-size: 0.9em;
    display: block;
  }
</style>


