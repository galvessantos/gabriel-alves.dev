<script lang="ts">
	import { language } from '$lib/stores/language';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';

	function toggleLanguage() {
		const currentLang = $language;
		const newLang = currentLang === 'en' ? 'pt' : 'en';
		language.setLanguage(newLang);
	}

	$: label = $language === 'en' ? 'Switch to PT' : 'Mudar para EN';
	$: displayText = $language === 'en' ? 'EN' : 'PT';
</script>

<Tooltip.Root openDelay={300}>
	<Tooltip.Trigger>
		<Button on:click={toggleLanguage} variant="ghost" size="icon" class="size-12 rounded-full">
			<span class="text-sm font-semibold">{displayText}</span>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{label}</p>
	</Tooltip.Content>
</Tooltip.Root>
