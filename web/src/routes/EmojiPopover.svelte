<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

   import { pb } from '$lib/pocketbase/client';

    const getEmojis = async () => {
        const record = await pb.collection('emojis').getList();
        return emojis;
    }
   

	let emojis = [
		'✌',
		'😂',
		'😝',
		'😁',
		'😱',
		'👉',
		'🙌',
		'🍻',
		'🔥',
		'🌈',
		'☀',
		'🎈',
		'🌹',
		'💄',
		'🎀',
		'⚽',
		'🎾',
		'🏁',
		'😡',
		'👿',
		'🐻',
		'🐶',
		'🐬',
		'🐟',
		'🍀',
		'👀',
		'🚗',
		'🍎',
		'💝',
		'💙',
		'👌',
		'❤',
		'😍',
		'😉',
		'😓',
		'😳',
		'💪',
		'💩',
		'🍸',
		'🔑',
		'💖',
		'🌟',
		'🎉',
		'🌺',
		'🎶',
		'👠',
		'🏈',
		'⚾',
		'🏆',
		'👽',
		'💀',
		'🐵',
		'🐮',
		'🐩',
		'🐎',
		'💣',
		'👃',
		'👂',
		'🍓',
		'💘',
		'💜',
		'👊',
		'💋',
		'😘',
		'😜',
		'😵',
		'🙏',
		'👋',
		'🚽',
		'💃',
		'💎',
		'🚀',
		'🌙',
		'🎁',
		'⛄',
		'🌊',
		'⛵',
		'🏀',
		'🎱',
		'💰',
		'👶',
		'👸',
		'🐰',
		'🐷',
		'🐍',
		'🐫',
		'🔫',
		'👄',
		'🚲',
		'🍉',
		'💛',
		'💚'
	];

	let state = {
		emoji: 'null'
	};

	async function selectEmoji(emoji: string) {
		state.emoji = emoji;
        await pb.collection('emojis').create({emoji: emoji});
	}
</script>

<Popover.Root>
	<Popover.Trigger>
		<button class="btn">Select Emoji</button>
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<ScrollArea class="h-[200px] rounded-md border p-4">
			<div class="grid grid-cols-5 gap-2">
				{#each emojis as emoji}
					<button class="btn text-xl" on:click={() => selectEmoji(emoji)}>{emoji}</button>
				{/each}
			</div>
		</ScrollArea>
	</Popover.Content>
</Popover.Root>
