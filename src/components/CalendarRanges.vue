<template>
    <div class="ranges">
        <div class="range_inputs">
            <button class="applyBtn btn btn-sm btn-success" :disabled="canSelect" type="button" @click="$emit('clickApply')">{{$t('Apply')}}</button>
            <button class="cancelBtn btn btn-sm btn-default" type="button" @click="$emit('clickCancel')">{{$t('Cancel')}}</button>
        </div>

        <ul v-if="ranges">
            <li v-for="(value, key) in ranges" :key="key" @click="selectedRange(key)">{{$t(key)}}</li>
        </ul>
      
        <div class="ranges-custom-button">
            <button @click="$emit('customEvent')" class="custom-button">{{$t(custom)}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['canSelect', 'ranges', 'custom'],
        methods: {
          selectedRange(rangeType) {
            this.$emit('rangeSelected', rangeType)
          }
        }
    }
</script>
