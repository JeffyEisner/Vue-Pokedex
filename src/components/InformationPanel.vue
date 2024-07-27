<script setup>
    import StatPlates from './StatPlates.vue'
    import InfoPlates from './InfoPlates.vue'

    const props = defineProps({
        pokemon: {
            type: Object,
            required: true
        }
    })
</script>

<template>
<!-- frame: Information Panel -->
<div class="frame informatio-b669cbff6831">
  <!-- frame: Info Plates -->
    <InfoPlates :pokemon="props.pokemon" />
  <!-- Stats Panel  -->
    <StatPlates :pokemon="props.pokemon" />
</div>
</template>