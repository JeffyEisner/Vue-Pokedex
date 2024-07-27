<script setup>
const props = defineProps({
	ability: {
		type: String,
		required: true
	}
})
</script>

<template>
  <!-- frame: Move Type Plate -->
  <div class="frame move-type-b7248733cca0">
	<!-- text: Move Type text -->
	<div class="shape text move-type-b7248733cca1">
	  <div class="text-node-html" id="html-text-node-e086b441-cf23-80d0-8004-b7248733cca1" data-x="765" data-y="-58.5">
		<div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
		  <div class="paragraph-set root-0-paragraph-set-0">
			<p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(0, 0, 0, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;text-rendering:geometricPrecision;caret-color:rgba(255, 0, 0, 1);text-decoration:none;--font-id:gfont-sofia-sans-extra-condensed;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:24px;font-family:Sofia Sans Extra Condensed;font-style:normal;font-weight:400">{{ props.ability }}</span></p>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>