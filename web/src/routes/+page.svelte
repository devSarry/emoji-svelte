<script>
  import * as Popover from "$lib/components/ui/popover";


</script>

<div class="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full">
    <div class="emoji-arena h-96 w-full bg-slate-50"></div>
    <div class="action-bar flex h-10 justify-between bg-slate-600">
        
        <button type="button" class="btn bg-gradient-to-br variant-gradient-secondary-tertiary">
            <span>(icon)</span>
            <span>Button</span>
        </button>

        <button type="button" class="btn bg-gradient-to-br variant-gradient-secondary-tertiary">
            <span>(icon)</span>
            <span>Button</span>
        </button>

        <Popover.Root>
            <Popover.Trigger>
              <button class="btn">Trigger</button>
            </Popover.Trigger>
            <Popover.Content class="w-80">
              <div class="p-4 bg-slate-600">
                <h3 class="text-lg font-semibold">Popover Title</h3>
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              </Popover.Content>
        </Popover.Root>

    </div>
</div>

