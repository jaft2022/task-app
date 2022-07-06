<template>
  <h2>Counter View</h2>
  <p>{{counterStore.numberOfChanges}}</p>
</template>

<script lang="ts" setup>
    import { useCounterStore } from '../stores/counter';

    const counterStore = useCounterStore();

</script>