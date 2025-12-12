<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	export let logoUrl: string = '';
	export let company: string = '';
	export let title: string = '';
	export let subtitle: string = '';
	export let href: string = '';
	export let badges: string[]=[''];
	export let description: string = '';
	export let start: string = '';
	export let end: string = '';
	let isExpanded = false;

	$: needsBorder = company === 'Clarios' || company === 'OPmobility';

	let handleClick = (e: MouseEvent) => {
		if (description) {
			e.preventDefault();
			isExpanded = !isExpanded;
		}
	};

	function splitIntoParagraphs(text: string): string[] {
		// Quebra o texto em parágrafos baseado em pontos seguidos de espaço e letra maiúscula
		// ou em frases muito longas (mais de 150 caracteres)
		const sentences = text.split(/(?<=\.)\s+(?=[A-Z])/);
		const paragraphs: string[] = [];
		let currentParagraph = '';

		for (const sentence of sentences) {
			const trimmed = sentence.trim();
			if (!trimmed) continue;

			// Se a frase atual + nova frase for muito longa, fecha o parágrafo atual
			if (currentParagraph && (currentParagraph.length + trimmed.length > 200)) {
				paragraphs.push(currentParagraph.trim());
				currentParagraph = trimmed;
			} else {
				currentParagraph += (currentParagraph ? ' ' : '') + trimmed;
			}
		}

		if (currentParagraph) {
			paragraphs.push(currentParagraph.trim());
		}

		return paragraphs.length > 0 ? paragraphs : [text];
	}

	$: paragraphs = description ? splitIntoParagraphs(description) : [];
</script>

<a href={href || '#'} on:click={handleClick}>
	<div class="flex rounded-lg bg-card text-card-foreground">
		<div class="flex-none">
			<div class={cn("m-auto size-12 bg-transparent p-0 flex items-center justify-center overflow-hidden rounded-full", needsBorder ? "border border-black dark:border-0" : "border-0")}>
				{#if logoUrl}
					<img src={logoUrl} alt={company} class="h-full w-full object-cover" />
				{:else}
					<div class="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium">
						{company[0]}
					</div>
				{/if}
			</div>
		</div>
		<div class="group ml-4 flex-grow flex-col items-center">
			<div class="flex flex-col">
				<div class="flex items-center justify-between gap-x-2 text-base">
					<h3
						class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm"
					>
						{company}
						{#if badges?.length > 0 && badges[0] !== ''}
							<span class="inline-flex gap-x-1">
								{#each badges as badge, index}
									<Badge variant="secondary" class="align-middle text-xs" key={index}>
										{badge}
									</Badge>
								{/each}
							</span>
						{/if}
						{#if description}
							<ChevronRightIcon
								class={cn(
									'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
									isExpanded ? 'rotate-90' : 'rotate-0'
								)}
							/>
						{/if}
					</h3>
					<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
						{start} - {end || 'Present'}
					</div>
				</div>
				{#if title}
					<div class="font-sans text-xs">{title}</div>
				{/if}
			</div>
			{#if description}
				{#if isExpanded}
					<div
						class="mt-3 rounded-xl border border-border/20 bg-muted/10 p-8 shadow-md shadow-black/5 max-w-[70ch]"
						transition:slide={{
							duration: 300,
							easing: quartOut
						}}
					>
						<!-- Conteúdo -->
						<div class="space-y-4 text-sm leading-relaxed antialiased">
							{#each paragraphs as paragraph}
								{#if paragraph.trim()}
									<p class="text-foreground/75 text-justify">
										{paragraph.trim()}
									</p>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</a>
