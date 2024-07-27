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
        console.log(response.data)
        sprite_url.value = response.data.sprites.front_default
    } catch (error) {
        console.error('Error fetching sprite URL:', error)
    }
    }

    onMounted(() => {
        fetchSpriteUrl(props.spriteId)
    })

    watch(() => props.spriteId, (newId) => {
        fetchSpriteUrl(newId)
    })


</script>

<template>
    <div class="shape frame next-sprit-b66e6bc20bba">
      <svg width="150" xmlns="http://www.w3.org/2000/svg" height="150" id="screenshot-6a0ce909-5039-80b1-8004-b66e6bc20bba" viewBox="465 205 150 150" style="print-color-adjust:exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1">
        <g id="shape-6a0ce909-5039-80b1-8004-b66e6bc20bba" data-testid="Next Sprite">
          <defs>
            <clipPath id="frame-clip-6a0ce909-5039-80b1-8004-b66e6bc20bba-render-26020" class="frame-clip frame-clip-def">
              <rect rx="30" ry="30" x="465.00000000000017" y="205" width="150.00000000000006" height="150" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)"></rect>
            </clipPath>
            <pattern patternUnits="userSpaceOnUse" x="465.00000000000017" y="205" width="150.00000000000006" height="150" id="fill-0-render-26020">
              <g>
                <rect width="150.00000000000006" height="150" style="fill:#95afff;fill-opacity:1"></rect>
                <image id="fill-image-render-26020-0" :xlink:href="sprite_url" preserveAspectRatio="xMidYMid slice" width="150.00000000000006" height="150" opacity="1"></image>
              </g>
            </pattern>
          </defs>
          <g clip-path="url(#frame-clip-6a0ce909-5039-80b1-8004-b66e6bc20bba-render-26020)" fill="none">
            <g class="fills" id="fills-6a0ce909-5039-80b1-8004-b66e6bc20bba">
              <rect rx="30" ry="30" x="465.00000000000017" y="205" width="150.00000000000006" height="150" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="frame-background" fill="url(#fill-0-render-26020)"></rect>
            </g>
            <g class="frame-children"></g>
          </g>
          <g id="strokes-6a0ce909-5039-80b1-8004-b66e6bc20bba" class="strokes">
            <g class="inner-stroke-shape" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)">
              <defs>
                <clipPath id="inner-stroke-render-26020-6a0ce909-5039-80b1-8004-b66e6bc20bba-0">
                  <use href="#stroke-shape-render-26020-6a0ce909-5039-80b1-8004-b66e6bc20bba-0"></use>
                </clipPath>
                <rect rx="30" ry="30" x="465.00000000000017" y="205" width="150.00000000000006" height="150" class="frame-background" style="fill:none;fill-opacity:none;stroke-width:4;stroke:#000000;stroke-opacity:1" id="stroke-shape-render-26020-6a0ce909-5039-80b1-8004-b66e6bc20bba-0"></rect>
              </defs>
              <use href="#stroke-shape-render-26020-6a0ce909-5039-80b1-8004-b66e6bc20bba-0" clip-path="url(&#x27;#inner-stroke-render-26020-6a0ce909-5039-80b1-8004-b66e6bc20bba-0&#x27;)"></use>
            </g>
          </g>
        </g>
      </svg>
    </div>
</template>