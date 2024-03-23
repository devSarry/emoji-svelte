<script lang="ts">
	import { onMount } from 'svelte';
  import EmojiPopover from '../lib/components/project-made-ui/emojipopover/EmojiPopover.svelte';
  import { emojiStore } from '@/emojistore';
	import { pb } from '@/pocketbase/client';
	import { emojiCollection } from '@/pocketbase/emoji';

    let evalue: string;

    emojiStore.subscribe((state) => {
        evalue = state.pop() || "🤷‍♂️";
    });

    console.log(evalue);

    // onMount(async () => {
	// 	const record = await emojiCollection.getFullList();
    //     emojiStore.set(record.map((emoji) => emoji.emoji || "🤷‍♂️"));
	// });

</script>

<div class="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full">
    <div class="emoji-arena h-96 w-full bg-slate-50">
        <div class="flex justify-center items-center h-full">
            {#key evalue}
                <p class="text-9xl animate-jump-in animate-duration-200 animate-ease-in">{evalue}</p>
            {/key}
        </div>
    </div>
    <div class="action-bar flex h-10 justify-between bg-slate-600">
        
        <button type="button" class="btn bg-gradient-to-br varian</button>t-gradient-secondary-tertiary">
            <span>(icon)</span>
            <span>B</span>
        </button>

        <button type="button" class="btn bg-gradient-to-br variant-gradient-secondary-tertiary">
            <span>ic</span>
            <span>B</span>
        </button>

        <EmojiPopover />

    </div>
</div>

