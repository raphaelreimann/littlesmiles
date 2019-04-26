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
      return this.shuffle(this.challenges).slice(0,3);     
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
      challenges: [
  {
    id: 0,
    title: 'Stranger Selfies',
    subtitle: 'Selfies with a stranger',
    category: 'Socializing',
    description: 'Walk up to an interesting person and ask nicely for a selfie. Words like "I like your style" might help.',
  },
  {
    id: 1,
    title: 'Be a Hero!',
    subtitle: 'Help a stranger in need',
    category: 'Socializing',
    description: 'Whether an old lady needs a helping hand while walking across the street, or getting the groceries for mum. You help and will be a hero.',
  },
  {
    id: 2,
    title: 'Need some coins?',
    subtitle: 'Put extra change into a vending machine.',
    category: 'socializing',
    description: 'Leave some coins after buying a snack from a vending machine or leave it there when you pass by. A hungry or thirsty person won`t need as much money for a snack.',
  },
  {
    id: 3,
    title: 'Garbage Can!',
    subtitle: 'Pick up garbage.',
    category: 'The Environment',
    description: 'Pick up some trash that you would pass by otherwise and throw it away properly.',
  },
  {
    id: 4,
    title: 'Something to spare?',
    subtitle: 'Change for street artists and homeless people.',
    category: 'Socializing',
    description: 'Have some spare-money on you while walking the streets and give it to the ones in need.',
  },
  {
    id: 5,
    title: 'Bread and water to the people!',
    subtitle: 'Simple items/necessities for homeless people',
    category: 'Socializing',
    description: 'Consider to give a bottle of water or some snacks to people in need. Don`t have them on you? Buy some!',
  },
  {
    id: 6,
    title: 'You can call me on my cellphone',
    subtitle: 'Re- connect with old friends.',
    category: 'Friends & Family',
    description: 'Whether an old lady needs a helping hand while walking across the street, or getting the groceries for mum. You help and will be a hero.',
  },
  {
    id: 7,
    title: 'They are nice! (Most of the time)',
    subtitle: 'Visit your grandparents.',
    category: 'Appreciation',
    description: 'If you can reach them in under an hour, you should visit them on a regular basis. They tell stories and make you food. What else do you want?',
  },
  {
    id: 8,
    title: '"You live here too!" ',
    subtitle: 'Help around the house',
    category: 'Friends & Family',
    description: 'Make your bed, take out the trash, walk the dog and the atmosphere at home will be.',
  },
  {
    id: 9,
    title: 'Be a Hero!',
    subtitle: 'Help a stranger in need',
    category: 'Socializing',
    description: 'Whether an old lady needs a helping hand while walking across the street, or getting the groceries for mum. You help and will be a hero.',
  },
  
]
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


