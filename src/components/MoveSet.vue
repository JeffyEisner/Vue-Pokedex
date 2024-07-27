<script setup>
    import MovePlate from './MovePlate.vue'
    import { defineProps, onMounted, ref } from 'vue'
    import axios from 'axios'

    const props = defineProps({
        pokemon: Object
    })

    let moveSet = ref([])

    function getRandomMoves(arr) {
        if (arr.length < 4) {
            return arr;
        }
        const result = [];
        const usedIndices = new Set();

        while (result.length < 4) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            if (!usedIndices.has(randomIndex)) {
                result.push(arr[randomIndex]);
                usedIndices.add(randomIndex);
            }
        }
        return result;
    }

    onMounted(async () => {
        moveSet = await getRandomMoves(props.pokemon.moves);
    })

    console.log(moveSet)

</script>

<template>
<!-- frame: Move Set -->
<div class="frame move-set-b7093255856d">
  <!-- frame: Move Set Label Plate -->
  <div class="frame move-set-l-b70dfc5d1387">
    <!-- text: Move Set: -->
    <div class="shape text move-set-b70dfc5d1389">
      <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b70dfc5d1389" data-x="615" data-y="65.5">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Semi Condensed;font-style:normal;font-weight:400">Move Set:</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Move Set Plates -->
  <div class="frame move-set-p-b711936f642c">
    <!-- frame: Move Plates -->
    <MovePlate v-for="move in moveSet.value" :key="move.move.name" :move="move.move"/>
  </div>
</div>
</template>