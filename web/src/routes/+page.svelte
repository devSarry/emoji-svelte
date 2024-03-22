<script lang="ts">
  import EmojiPopover from './EmojiPopover.svelte';

  import * as Popover from "$lib/components/ui/popover";
  import { ScrollArea } from "$lib/components/ui/scroll-area";



  let state = {
    emoji: "null"
  }

    function selectEmoji(emoji: string) {
        state.emoji = emoji
    }

</script>

<div class="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full">
    <div class="emoji-arena h-96 w-full bg-slate-50">
        <div class="flex justify-center items-center h-full">
            <p class="text-9xl">{state.emoji}</p>
        </div>
    </div>
    <div class="action-bar flex h-10 justify-between bg-slate-600">
        
        <button type="button" class="btn bg-gradient-to-br variant-gradient-secondary-tertiary">
            <span>(icon)</span>
            <span>B</span>
        </button>

        <button type="button" class="btn bg-gradient-to-br variant-gradient-secondary-tertiary">
            <span>{state.emoji}</span>
            <span>B</span>
        </button>

        <EmojiPopover />

    </div>
</div>

