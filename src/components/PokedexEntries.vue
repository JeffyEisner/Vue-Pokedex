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
  <div class="frame entry-numb-b667ea062da1">
    <!-- text: Pokemon ID -->
    <div class="shape text pokemon-id-b67248b6225e">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b67248b6225e" data-x="315" data-y="72">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:34px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Pokedex Entry: {{ props.pokemon.id.toString() }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Entry Number -->
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