<template>
    <img v-bind:class="classObject" v-bind:src="emote.url" />
</template>

<script lang="ts">
export default {
    name: 'ChatEmote',
    props: {
        emote: Object
    },
    computed: {
        classObject() {
            return {
                'emote': true,
                ['network-' + this.emote.network]: true,
                [this.emote.class]: true,
                'is-small': this.$root.settings.smallEmotes
            }
        }
    }
}
</script>