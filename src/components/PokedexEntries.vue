<script setup>
    import { defineProps, RouterLink } from 'vue'
    import SmallPokemonSprite from '@/components/SmallPokemonSprite.vue'

    const props = defineProps({
        pokemon: Object
    })

    let prevSpriteId = props.pokemon.id - 1
    let nextSpriteId = props.pokemon.id + 1

    if (prevSpriteId < 1) {
        prevSpriteId = 1025
    }
    if (nextSpriteId > 1025) {
        nextSpriteId = 1
    }

</script>

<template>
<!-- frame: Pokedex Entries -->
<div class="frame pokedex-en-b6571c4659b3">
  <!-- frame: Entry Number -->
  <div class="pokedex-entry-number-frame">
    <p class="pokedex-entry-number-text">Pokedex Entry: {{ props.pokemon.id }}</p>
  </div>
  <!-- frame: Prev/Next Pokemon -->
  <div class="frame entry-numb-b7430c1b0394">
    <!-- frame: Board -->
    <RouterLink class="change-entry-buton" :to="`/` + prevSpriteId">
      <i class="pi pi-chevron-left prev-next-button-icon"></i>
    </RouterLink>
    <!-- frame: Board -->
    <a class="change-entry-buton" :href="`/` + nextSpriteId">
      <i class="pi pi-chevron-right prev-next-button-icon"></i>
    </a>
  </div>
  <!-- frame: Prev / Next Sprites -->
  <div class="frame prev-next-sprites">
    <!-- frame: Prev Sprite -->
    <SmallPokemonSprite :spriteId="prevSpriteId" style="grid-area: 1/1;" />
    <!-- frame: Next Sprite -->
    <SmallPokemonSprite :spriteId="nextSpriteId" style="grid-area: 1/2;" />

  </div>
</div>
</template>
