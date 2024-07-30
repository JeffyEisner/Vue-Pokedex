<script setup>
    const props = defineProps({
        pokemon: Object
    })   
</script>

<template>
<!-- frame: Pokemon Image -->
<div class="sprite-icon">
        <img style="width: 300px; height:300px; margin-left: auto; margin-right: auto;" :src="props.pokemon.sprites.front_default" alt="Pokemon Sprite" />
    </div>
</template>