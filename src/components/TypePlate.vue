<script setup>
    const props = defineProps({
        pokeType: {
            type: String,
            required: true
        }
    })

    const typeColor = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    }

    const bgColor = typeColor[props.pokeType.toLowerCase()]
</script>

<template>
    <!-- frame: Move Type Plate -->
<div class="frame move-type-b725190b8d49" :style="{ backgroundColor: bgColor}">
  <!-- text: Move Type text -->
  <div class="shape text move-type-b725190b8d4a">
    <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b725190b8d4a" data-x="790" data-y="-158.5">
      <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
        <div class="paragraph-set root-0-paragraph-set-0">
          <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(255, 255, 255, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokeType.charAt(0).toUpperCase() + props.pokeType.slice(1) }}</span></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>