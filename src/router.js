import Vue from 'vue';
import Router from 'vue-router';
import AddChallenge from './views/AddChallenge.vue';
import ChallengeCompleted from './views/ChallengeCompleted.vue';
import Challenge from './views/Challenge.vue';
import ChallengeRejected from './views/ChallengeRejected.vue';
import Challenges from './views/Challenges.vue';
import History from './views/History.vue';
import Profile from './views/Profile.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'challenges',
      component: Challenges,
    },
    {
      path: '/add/challenge',
      name: 'addChallenge',
      component: AddChallenge,
    },
    {
      path: '/challenge/completed',
      name: 'challengeCompleted',
      component: ChallengeCompleted,
    },
    {
      path: '/challenges/:id',
      name: 'challenge',
      component: Challenge,
    },
    {
      path: '/challenge/rejected',
      name: 'challengeRejected',
      component: ChallengeRejected,
    },
    {
      path: '/History',
      name: 'history',
      component: History,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});
