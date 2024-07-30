<script setup>
    import PokedexEntries from '@/components/PokedexEntries.vue'
    import InformationPanel from '@/components/InformationPanel.vue';
    import PokemonSprite from '@/components/PokemonSprite.vue';
    import MoveSet from '@/components/MoveSet.vue';
    import { defineProps, onMounted, ref, watch } from 'vue'
    import axios from 'axios'

    const props= defineProps({
        pokemon_id: Number
    })

    const pokemon = ref('')

    const fetchPokemon = async (Id) => {
        try{ 
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Id}`)
            pokemon.value = response.data
        } catch (error) {
            console.error(error)
        }
    }

    onMounted(async () => {
        fetchPokemon(props.pokemon_id)
    })

    watch(() => props.pokemon_id, async (newVal) => {
        fetchPokemon(newVal)
    })
</script>

<template>
<!-- frame: Pokedex Entry -->
<div class="pokedex-container">
  <!-- frame: Pokemon Image -->
  <PokemonSprite v-if="pokemon" :pokemon="pokemon"/>
  <!-- frame: Information Panel -->
  <InformationPanel v-if="pokemon" :pokemon="pokemon"/>
  <!-- frame: Pokedex Entries -->
  <PokedexEntries v-if="pokemon" :pokemon="pokemon"/>
  <!-- frame: Move Set -->
  <MoveSet v-if="pokemon" :pokemon="pokemon"/>
</div>
</template>
