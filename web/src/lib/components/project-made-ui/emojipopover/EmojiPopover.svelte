<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { emojiStore } from '@/emojistore';

	import { pb } from '$lib/pocketbase/client';

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
		console.log("Emoji selected: ", emoji);
		emojiStore.update((s) => {
			return [emoji, ...s];
		});
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
