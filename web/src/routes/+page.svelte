<script>
    import { RangeSlider } from '@skeletonlabs/skeleton'
    
    let value = 15;

</script>

Copy
<RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>Label</RangeSlider>