<script lang="ts">
	import { onMount } from 'svelte';

	export let words: string[] = [];
	export let baseText: string = 'Desenvolvedor FullStack.';
	export let speed: number = 100;

	let displayText: string = baseText;
	let currentPhaseIndex: number = 0;
	let charIndex: number = 0;
	let phases: string[] = [];

	$: if (words.length > 0) {
		phases = [baseText, ...words];
	}

	onMount(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		const animate = () => {
			const currentPhase = phases[currentPhaseIndex % phases.length];

			if (charIndex <= currentPhase.length) {
				displayText = currentPhase.slice(0, charIndex);
				charIndex++;
				timeoutId = setTimeout(animate, speed);
			} else {
				charIndex = 0;
				currentPhaseIndex++;
				timeoutId = setTimeout(animate, 1500);
			}
		};

		if (phases.length > 0) {
			timeoutId = setTimeout(() => {
				currentPhaseIndex = 1;
				charIndex = 0;
				displayText = '';
				animate();
			}, 1500);
		}

		return () => clearTimeout(timeoutId);
	});
</script>

<span aria-hidden="true">{displayText}</span>
<span class="sr-only">{baseText}</span>
