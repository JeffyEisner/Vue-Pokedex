<script setup>
    import PokedexEntries from '@/components/PokedexEntries.vue'
    import SmallPokemonSprite from '@/components/SmallPokemonSprite.vue'
    import { defineProps, onMounted, ref } from 'vue'
    import axios from 'axios'

    const props= defineProps({
        pokemon_id: Number
    })

    const pokemon = ref(null)

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

    console.log(pokemon)
</script>

<template>
  <PokedexEntries :pokemon="pokemon" />
</template>
