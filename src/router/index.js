import { createRouter, createWebHistory } from 'vue-router'
import PokedexView from '../views/PokedexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
	  path: '/:id',
	  name: 'home',
	  component: PokedexView,
	  props: route => ({ pokemon_id: Number(route.params.id) })
	}
  ]
})

export default router