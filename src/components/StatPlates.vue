<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        pokemon: Object
    })
</script>

<template>
<!-- frame: Stats -->
<div class="frame stats-b6766459aa20">
  <!-- frame: HP -->
  <div class="frame hp-b68636052c78">
    <!-- text: Health Points -->
    <div class="shape text health-poi-b68636056a99">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b68636056a99" data-x="915" data-y="-235">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Health Points</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- text: HP Tag -->
    <div class="shape text hp-tag-b6874a9b73a7">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b6874a9b73a7" data-x="1065" data-y="-235">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.stats[0].base_stat }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Attack -->
  <div class="frame attack-b6781763dea2">
    <!-- text: Attack -->
    <div class="shape text attack-b6849d3db62f">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b6849d3db62f" data-x="915" data-y="-185">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Attack</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- text: Attack Tag -->
    <div class="shape text attack-tag-b6878ede39fa">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b6878ede39fa" data-x="1065" data-y="-185">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.stats[1].base_stat }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Deffens -->
  <div class="frame deffens-b678179b7926">
    <!-- text: Defense -->
    <div class="shape text defense-b684a1d61c27">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b684a1d61c27" data-x="915" data-y="-135">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Defense</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- text: Deffense Tag -->
    <div class="shape text deffense-t-b68795b0d8fb">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b68795b0d8fb" data-x="1065" data-y="-135">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.stats[2].base_stat }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Special Attack -->
  <div class="frame special-at-b67817c8ac34">
    <!-- text: Spec. Attack -->
    <div class="shape text spec-atta-b684a3dac815">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b684a3dac815" data-x="915" data-y="-85">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Spec. Attack</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- text: Spec Attack Tag -->
    <div class="shape text spec-attac-b687981a5d54">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b687981a5d54" data-x="1065" data-y="-85">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.stats[3].base_stat }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Special Defense -->
  <div class="frame special-de-b67818304b9c">
    <!-- text: Spec. Defense -->
    <div class="shape text spec-defe-b684a58fbf69">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b684a58fbf69" data-x="915" data-y="-35">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Spec. Defense</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- text: Spec Def Tag -->
    <div class="shape text spec-def-t-b6879cecfa9b">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b6879cecfa9b" data-x="1115" data-y="-35">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.stats[4].base_stat }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- frame: Speed -->
  <div class="frame speed-b67818cca0a9">
    <!-- text: Speed -->
    <div class="shape text speed-b684a748e447">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b684a748e447" data-x="915" data-y="15">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">Speed</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- text: Speed Tag -->
    <div class="shape text speed-tag-b6879eefb9d0">
      <div class="text-node-html" id="html-text-node-6a0ce909-5039-80b1-8004-b6879eefb9d0" data-x="1065" data-y="15">
        <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
          <div class="paragraph-set root-0-paragraph-set-0">
            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(36, 34, 34, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(36, 34, 34, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#242222&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:25px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.pokemon.stats[5].base_stat }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>