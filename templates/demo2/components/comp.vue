<template>
    <comp class="overridden" />
</template>
<style>
.overridden {
    text-transform: uppercase;
}
</style>
<script>
import comp from 'master-template/components/comp.vue'
export default {
    components: { comp },
}
</script>
