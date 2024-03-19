<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import "../app.postcss";
</script>

<AppShell>
	<svelt:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			(title)
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelt:fragment>

	<slot />
	
</AppShell>