<script setup>
    import { defineProps, ref, onMounted } from 'vue'
    import TypePlate from './TypePlate.vue';
    import axios from 'axios'

    const props = defineProps({
        moveObject: Object
    })

    const move = ref('')

    const fetchMove = async () => {
        try { 
            const response = await axios.get(props.moveObject.move.url)
            return response.data
        } catch (error) {
            return 'Error fetching move data: ' + error
        }
    }

    onMounted(async () => {
        move.value = await fetchMove()
    })
</script>

<template>
    <!-- frame: Move Plate -->
<div class="frame move-plate-b711d564e998">
  <!-- frame: Move Type Plate -->
  <TypePlate v-if="move" :pokeType="move.type.name" />
  <!-- frame: Move Imformation -->
  <div class="frame move-imfor-b7165cdec5ee">
    <!-- text: Move Name -->
    <div class="shape text move-name-b716c29b8f33">
      <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b716c29b8f33" data-x="615" data-y="153">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p v-if="move" class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Semi Condensed;font-style:normal;font-weight:400">{{ move.name.charAt(0).toUpperCase() + move.name.slice(1, move.name.length) }}</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- frame: Move Stats -->
    <div class="frame move-stats-b7174bbca77f">
      <!-- text: Power: -->
      <div class="shape text power-b717a8a67bb3">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b717a8a67bb3" data-x="615" data-y="194">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Semi Condensed;font-style:normal;font-weight:400">Power:</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- text: Move Power -->
      <div class="shape text move-power-b717c7dbcd58">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b717c7dbcd58" data-x="679" data-y="194">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Semi Condensed;font-style:normal;font-weight:400">&nbsp;&nbsp;{{ move.power }}</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- text: PP: -->
      <div class="shape text pp-b717daeb80e9">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b717daeb80e9" data-x="817.5" data-y="194">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Semi Condensed;font-style:normal;font-weight:400">PP:</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- text: Move PP -->
      <div class="shape text move-pp-b717f38e6b2e">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b717f38e6b2e" data-x="881" data-y="194">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Semi Condensed;font-style:normal;font-weight:400">{{ move.pp }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>