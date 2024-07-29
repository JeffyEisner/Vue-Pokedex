<script setup>
    const props = defineProps({
        pokemon: Object
    })
    
</script>

<template>
<!-- frame: Pokemon Image -->
<div class="shape frame pokemon-im-b733169b256e">
  <svg width="300" xmlns="http://www.w3.org/2000/svg" height="300" id="screenshot-e086b441-cf23-80d0-8004-b733169b256e" viewBox="315 -245 300 300" style="print-color-adjust:exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1">
    <g id="shape-e086b441-cf23-80d0-8004-b733169b256e" data-testid="Pokemon Image">
      <defs>
        <clipPath id="frame-clip-e086b441-cf23-80d0-8004-b733169b256e-render-359" class="frame-clip frame-clip-def">
          <rect rx="30" ry="30" x="315" y="-245" width="300" height="300" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)"></rect>
        </clipPath>
        <pattern patternUnits="userSpaceOnUse" x="315" y="-245" width="300" height="300" id="fill-0-render-359">
          <g>
            <rect width="300" height="300" style="fill:#95afff;fill-opacity:1"></rect>
            <image id="fill-image-render-359-0" :xlink:href="props.pokemon.sprites.front_default" preserveAspectRatio="xMidYMid slice" width="300" height="300" opacity="1"></image>
          </g>
        </pattern>
      </defs>
      <g clip-path="url(#frame-clip-e086b441-cf23-80d0-8004-b733169b256e-render-359)" fill="none">
        <g class="fills" id="fills-e086b441-cf23-80d0-8004-b733169b256e">
          <rect rx="30" ry="30" x="315" y="-245" width="300" height="300" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="frame-background" fill="url(#fill-0-render-359)"></rect>
        </g>
        <g class="frame-children"></g>
      </g>
      <g id="strokes-e086b441-cf23-80d0-8004-b733169b256e" class="strokes">
        <g class="inner-stroke-shape" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)">
          <defs>
            <clipPath id="inner-stroke-render-359-e086b441-cf23-80d0-8004-b733169b256e-0">
              <use href="#stroke-shape-render-359-e086b441-cf23-80d0-8004-b733169b256e-0"></use>
            </clipPath>
            <rect rx="30" ry="30" x="315" y="-245" width="300" height="300" class="frame-background" style="fill:none;fill-opacity:none;stroke-width:4;stroke:#000000;stroke-opacity:1" id="stroke-shape-render-359-e086b441-cf23-80d0-8004-b733169b256e-0"></rect>
          </defs>
          <use href="#stroke-shape-render-359-e086b441-cf23-80d0-8004-b733169b256e-0" clip-path="url(&#x27;#inner-stroke-render-359-e086b441-cf23-80d0-8004-b733169b256e-0&#x27;)"></use>
        </g>
      </g>
    </g>
  </svg>
</div>
</template>