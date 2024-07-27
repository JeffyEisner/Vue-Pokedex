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
    <div class="shape frame board-b744b24b031e">
      <svg width="150" xmlns="http://www.w3.org/2000/svg" height="75" id="screenshot-e086b441-cf23-80d0-8004-b744b24b031e" viewBox="315 130 150 75" style="print-color-adjust:exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1">
        <g id="shape-e086b441-cf23-80d0-8004-b744b24b031e" data-testid="Board">
          <defs>
            <clipPath id="frame-clip-e086b441-cf23-80d0-8004-b744b24b031e-render-26017" class="frame-clip frame-clip-def">
              <rect rx="30" ry="30" x="315" y="130" width="150" height="75" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)"></rect>
            </clipPath>
            <pattern patternUnits="userSpaceOnUse" x="315" y="130" width="150" height="75" id="fill-0-render-26017">
              <g>
                <rect width="150" height="75" style="fill:#ffffff;fill-opacity:1"></rect>
                <image id="fill-image-render-26017-0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADmAAAA5gEiXLpRAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFRQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI6hEwAAABt0Uk5TAAECAwwOGx4xPEJpgoabnp+goaKjpMDB5fz+/OuR+AAAAGJJREFUOMvtzskOgCAMRdEKzhOKE/j+/z/duJTWmC59K5J7kkL0MNMHX1B6xgE4Mr4DrdBjxfez+/unTqPQa6HLQDwhf5LMpCBmBeEVxKIg1pcilpJokoDsBmAnZnYILr/fF/LsFedf9J6UAAAAAElFTkSuQmCC" preserveAspectRatio="xMidYMid slice" width="150" height="75" opacity="1"></image>
              </g>
            </pattern>
          </defs>
          <g clip-path="url(#frame-clip-e086b441-cf23-80d0-8004-b744b24b031e-render-26017)" fill="none">
            <g class="fills" id="fills-e086b441-cf23-80d0-8004-b744b24b031e">
              <rect rx="30" ry="30" x="315" y="130" width="150" height="75" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="frame-background" fill="url(#fill-0-render-26017)"></rect>
            </g>
            <g class="frame-children"></g>
          </g>
          <g id="strokes-e086b441-cf23-80d0-8004-b744b24b031e" class="strokes">
            <g class="inner-stroke-shape" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)">
              <defs>
                <clipPath id="inner-stroke-render-26017-e086b441-cf23-80d0-8004-b744b24b031e-0">
                  <use href="#stroke-shape-render-26017-e086b441-cf23-80d0-8004-b744b24b031e-0"></use>
                </clipPath>
                <rect rx="30" ry="30" x="315" y="130" width="150" height="75" class="frame-background" style="fill:none;fill-opacity:none;stroke-width:4;stroke:#000000;stroke-opacity:1" id="stroke-shape-render-26017-e086b441-cf23-80d0-8004-b744b24b031e-0"></rect>
              </defs>
              <use href="#stroke-shape-render-26017-e086b441-cf23-80d0-8004-b744b24b031e-0" clip-path="url(&#x27;#inner-stroke-render-26017-e086b441-cf23-80d0-8004-b744b24b031e-0&#x27;)"></use>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <!-- frame: Board -->
    <div class="shape frame board-b74349581faa">
      <svg width="150" xmlns="http://www.w3.org/2000/svg" height="75" id="screenshot-e086b441-cf23-80d0-8004-b74349581faa" viewBox="465 130 150 75" style="print-color-adjust:exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1">
        <g id="shape-e086b441-cf23-80d0-8004-b74349581faa" data-testid="Board">
          <defs>
            <clipPath id="frame-clip-e086b441-cf23-80d0-8004-b74349581faa-render-26018" class="frame-clip frame-clip-def">
              <rect rx="30" ry="30" x="465" y="130" width="150" height="75" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)"></rect>
            </clipPath>
            <pattern patternUnits="userSpaceOnUse" x="465" y="130" width="150" height="75" id="fill-0-render-26018">
              <g>
                <rect width="150" height="75" style="fill:#ffffff;fill-opacity:1"></rect>
                <image id="fill-image-render-26018-0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADmAAAA5gEiXLpRAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFRQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI6hEwAAABt0Uk5TAAECAwwOGx4xPEJpgoabnp+goaKjpMDB5fz+/OuR+AAAAGBJREFUOMvt0rcOgEAMA9DQezvaHf7//2RghRihjHj1kxIpEbmSDr5LRMkGYFVEBQBY4keQByaa46WYDYQzEJOBGA3EQEUvTJSfARvBlvx7vS8COXLNniDa9V4kc7697U9vSxXnRfolUwAAAABJRU5ErkJggg==" preserveAspectRatio="xMidYMid slice" width="150" height="75" opacity="1"></image>
              </g>
            </pattern>
          </defs>
          <g clip-path="url(#frame-clip-e086b441-cf23-80d0-8004-b74349581faa-render-26018)" fill="none">
            <g class="fills" id="fills-e086b441-cf23-80d0-8004-b74349581faa">
              <rect rx="30" ry="30" x="465" y="130" width="150" height="75" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="frame-background" fill="url(#fill-0-render-26018)"></rect>
            </g>
            <g class="frame-children"></g>
          </g>
          <g id="strokes-e086b441-cf23-80d0-8004-b74349581faa" class="strokes">
            <g class="inner-stroke-shape" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)">
              <defs>
                <clipPath id="inner-stroke-render-26018-e086b441-cf23-80d0-8004-b74349581faa-0">
                  <use href="#stroke-shape-render-26018-e086b441-cf23-80d0-8004-b74349581faa-0"></use>
                </clipPath>
                <rect rx="30" ry="30" x="465" y="130" width="150" height="75" class="frame-background" style="fill:none;fill-opacity:none;stroke-width:4;stroke:#000000;stroke-opacity:1" id="stroke-shape-render-26018-e086b441-cf23-80d0-8004-b74349581faa-0"></rect>
              </defs>
              <use href="#stroke-shape-render-26018-e086b441-cf23-80d0-8004-b74349581faa-0" clip-path="url(&#x27;#inner-stroke-render-26018-e086b441-cf23-80d0-8004-b74349581faa-0&#x27;)"></use>
            </g>
          </g>
        </g>
      </svg>
    </div>
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