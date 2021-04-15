<template>
    <img class="badge" v-bind:src="badge.url" />
</template>

<script lang="ts">
export default {
    name: 'ChatBadge',
    props: {
        badge: Object
    }
}
</script>