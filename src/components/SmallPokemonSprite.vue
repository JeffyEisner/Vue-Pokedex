<script setup>
    import { defineProps, onMounted, ref, watch } from 'vue'
    import axios from 'axios'

    const props= defineProps({
        spriteId: {
            type: Number,
            required: true
        }
    })

    const sprite_url = ref('')

    const fetchSpriteUrl = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return response.data.sprites.front_default
    } catch (error) {
        return 'Error fetching sprite URL:' + error
    }
    }

    onMounted(async () => {
        sprite_url.value = await fetchSpriteUrl(props.spriteId)
    })
</script>

<template>
    <div class="small-sprite-icon">
        <img style="width: 142px; height:142px; margin-left: auto; margin-right: auto;" :src="sprite_url" alt="Pokemon Sprite" />
    </div>
</template>
