<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import RotatingText from '$lib/components/portfolio/RotatingText.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Mail, Phone } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';
	import { marked } from 'marked';
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/translations';

	let BLUR_FADE_DELAY = 0.04;

	$: t = (key) => getTranslation($language, key);
	$: rotatingWords = $language === 'pt' ? ['Java, Spring & Angular'] : ['Java, Spring & Angular'];
</script>

<svelte:head>
	<title>{DATA.name}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content={DATA.name} />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={DATA.img} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content={DATA.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={DATA.img} />
	<meta name="twitter:description" content={DATA.description} />
	<meta name="google-site-verification" content="your-google-verification-code" />
	<meta name="yandex-verification" content="your-yandex-verification-code" />
</svelte:head>

<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none whitespace-nowrap"
						yOffset={8}
					>
						{t('hero.greeting')}<span class="text-red-500">.</span>
					</BlurFade>
					<BlurFade
						class="max-w-[600px] md:text-xl text-muted-foreground"
						delay={BLUR_FADE_DELAY}
					>
						{#if $language === 'pt'}
							<RotatingText
								words={rotatingWords}
								baseText="Desenvolvedor de Software"
								speed={60}
							/>
						{:else}
							<RotatingText words={rotatingWords} baseText="Software Developer" speed={60} />
						{/if}
					</BlurFade>
				</div>
			</div>
		</div>
	</section>

	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">{t('about.title')}</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-justify"
			>
				{@html marked(t('about.summary'))}
			</div>
		</BlurFade>
	</section>

	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{t('work.title')}</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						{...work}
						title={t(`work.items.${work.i18n}.title`)}
						start={t(`work.items.${work.i18n}.start`)}
						end={t(`work.items.${work.i18n}.end`)}
						description={t(`work.items.${work.i18n}.description`)}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{t('education.title')}</h2>
			</BlurFade>
			{#each DATA.education as edu, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						company={edu.school}
						title={t('education.items.unip.degree')}
						subtitle={t('education.items.unip.degree')}
						start={t('education.items.unip.start')}
						end={t('education.items.unip.end')}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="languages">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{t('languages.title')}</h2>
			</BlurFade>
			{#each DATA.languages as lang, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={lang.href}
						logoUrl={lang.logoUrl}
						company={lang.school}
						title={t(`languages.items.${lang.i18n}.degree`)}
						subtitle={t(`languages.items.${lang.i18n}.degree`)}
						start={t(`languages.items.${lang.i18n}.start`)}
						end={t(`languages.items.${lang.i18n}.end`)}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{t('skills.title')}</h2>
			</BlurFade>
			<div class="flex flex-wrap gap-1">
				{#each DATA.skills as skill, id}
					<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
						<Badge>
							{t(`skills.items.${skill}`)}
						</Badge>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<section id="projects">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							{t('projects.title')}
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							{t('projects.subtitle')}
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							{t('projects.description')}
						</p>
					</div>
				</div>
			</BlurFade>
			<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
				{#each DATA.projects as project, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
						<ProjectCard
							href={project.href}
							title={t(`projects.items.${project.i18n}.title`)}
							description={t(`projects.items.${project.i18n}.description`)}
							dates={t(`projects.items.${project.i18n}.dates`)}
							tags={project.technologies}
							image={project.image}
							video={project.video}
							links={project.links.map(link => {
								const linkKey = link.type.toLowerCase();
								return {
									...link,
									type: t(`projects.links.${linkKey}`) || link.type
								};
							})}
						/>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
						{t('contact.title')}
					</div>
					<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
						{t('contact.subtitle')}
					</h2>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						{t('contact.message')}
					</p>
					<div class="flex flex-col items-center gap-4 mt-6">
						<a
							href="mailto:{DATA.contact.email}"
							class="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
						>
							<Mail class="size-5" />
							<span>{t('contact.email')}</span>
						</a>
						<a
							href="https://wa.me/5515998116521?text=Olá, Gabriel!"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
						>
							<Phone class="size-5" />
							<span>{t('contact.phone')}</span>
						</a>
					</div>
				</div>
			</BlurFade>
		</div>
	</section>
</main>