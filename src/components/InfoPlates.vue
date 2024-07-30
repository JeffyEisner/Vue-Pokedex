<script setup>
    import { defineProps, watch } from 'vue'
    import AbilityPlate from './AbilityPlate.vue';
    import TypePlate from './TypePlate.vue';

    const props = defineProps({
        pokemon: Object
    })
    
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min)
        const maxFloored = Math.floor(max)
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }

    let ability = props.pokemon.abilities[getRandomIntInclusive(0, props.pokemon.abilities.length - 1)].ability.name

    watch(() => props.pokemon, (newVal) => {
        ability = newVal.abilities[getRandomIntInclusive(0, newVal.abilities.length - 1)].ability.name
    })

</script>

<template>
    <!-- frame: Info Plates -->
<div class="frame info-plate-b67680067ca9">
  <!-- frame: Name Plate -->
  <div class="info-plate">
    <div class="inflo-plate-text-container">
      <p class="info-plate-text">Speices:</p>
    </div>
    <div class="info-plate-text-container">
      <p class="info-plate-text">{{ props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1, props.pokemon.name.length) }}</p>
    </div> 
  </div>
  <!-- frame: Type Plate -->
  <div class="frame type-plate-b688f4441984">
    <!-- text: Type: -->
    <div class="shape text type-b688f4441986">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b688f4441986" data-x="615" data-y="-160">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(7, 7, 7, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(7, 7, 7, 1);text-decoration:none;--font-id:gfont-sofia-sans-semi-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#070707&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Type:</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- frame: Type Badge Flex -->
    <div class="frame type-badge-b689c8a082ee">
      <TypePlate v-for="type in props.pokemon.types" :pokeType="type.type.name" :key="type.type.name" />
    </div>
  </div>
  <!-- frame: Abilities Plate -->
  <div class="frame abilities-b6963dd4fcff">
    <!-- text: Abilities -->
    <div class="shape text abilities-b6963dd51f1a">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b6963dd51f1a" data-x="590" data-y="-60">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(7, 7, 7, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(7, 7, 7, 1);text-decoration:none;--font-id:gfont-sofia-sans-semi-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#070707&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Abilities:</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- frame: Type Badge Flex -->
    <AbilityPlate :ability="ability" />
  </div>
  <!-- frame: Height and Weight Plates -->
  <div class="frame height-and-b6fffc002939">
    <!-- frame: Height Plate -->
    <div class="frame height-pla-b7004a9be10d">
      <!-- text: Height: -->
      <div class="shape text height-b700d040585f">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b700d040585f" data-x="627.5" data-y="15.5">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-semi-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Height:</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- text: Height Stat -->
      <div class="shape text height-sta-b7011e33444b">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b7011e33444b" data-x="715" data-y="15.5">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-semi-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{  props.pokemon.height }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- frame: Weight Plate -->
    <div class="frame weight-pla-b7059b8f292a">
      <!-- text: Weight Tag -->
      <div class="shape text weight-tag-b7059b8f292c">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b7059b8f292c" data-x="777.5" data-y="15.5">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-semi-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Weight:</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- text: Weight Stat -->
      <div class="shape text weight-sta-b7059b8f292b">
        <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b7059b8f292b" data-x="865" data-y="15.5">
          <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
            <div class="paragraph-set root-0-paragraph-set-0">
              <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(0, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-semi-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#000000&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.weight }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>