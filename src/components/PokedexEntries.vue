<script setup>
    import { defineProps } from 'vue'
    import SmallPokemonSprite from '@/components/SmallPokemonSprite.vue'

    const props = defineProps({
        pokemon: Object
    })

    const prevSpriteId = props.pokemon.id - 1
    const nextSpriteId = props.pokemon.id + 1

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
    <a class="change-entry-buton" :href="`/` + prevSpriteId">
      <i></i>
    </a>
    <!-- frame: Board -->
    <a class="change-entry-buton" :href="`/` + nextSpriteId">
      <i class="pi pi-chevron-right" style="margin-left: auto; margin-right: auto;"></i>
    </a>
  </div>
  <!-- frame: Prev / Next Sprites -->
  <div class="frame prev-nex-b66dfbc661d6">
    <!-- frame: Prev Sprite -->
    <SmallPokemonSprite :spriteId="prevSpriteId" style="grid-area: 1/1;" />
    <!-- frame: Next Sprite -->
    <SmallPokemonSprite :spriteId="nextSpriteId" style="grid-area: 1/2;" />

  </div>
</div>
</template>
