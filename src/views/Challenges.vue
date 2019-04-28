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
           'gradient-one': challenge.category == 'Appreciation',
           'gradient-two': challenge.category == 'Friends & Family',
           'gradient-two': challenge.category == 'Socializing'
          }"
        >
            <span class="title">{{ challenge.title}}</span><br>
            <span class="subtitle">{{ challenge.subtitle}}</span>
            <!--span class="description">{{ challenge.description}}</span-->
        </router-link>
    </ul>
    <div class="quote">
      <span class="quote-mark">"</span>
      <span class="quote-main">If you never try you'll never know.</span>
      <span class="quote-author">Barack Obama</span>
    </div>
    
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
    height: 600px;
    padding-left: 0px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }
  .list-item {
    //background-color: red;
    margin: 10px 25px;
    text-align: left;
    padding: 30px;
    color: white;
    vertical-align: center;
    border-radius: 15px;
    background-image: linear-gradient(to left, rgb(250, 39, 24), rgb(255, 97, 24));
    height: 15%; 
    .gradient-one{
      background-image: linear-gradient(to right, purple, blue);
    } 
    .gradient-two{
      background-image: linear-gradient(to right, green, darkblue);
    } 
  }

  .quote{
    display: flex;
    flex-direction: column;
    .quote-mark{
      font-size: 50px;
      display: block;
      margin-bottom: -20px;
    }
    .quote-main{
      font-weight: bold;
    }
    .quote-author{
      margin-top: 6px;
      font-size: 0.8em;
      font-weight: lighter;
    }
  }

  .title{
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 5px;
    color: white;
  }
  .subtitle{
    font-weight: bold;
    font-size: 0.9em;
  }
  .description{
    font-weight: lighter;
    font-size: 0.9em; 
  }
</style>


