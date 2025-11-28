import { CodeIcon, Github, Globe, HomeIcon, Mail } from 'lucide-svelte';
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';
import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';
import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';
import MontrealImg from '$lib/imgs/montreal.jpeg';
import OpMobilityImg from '$lib/imgs/opmobility.png';
import ClariosImg from '$lib/imgs/clarios.png';
import UnipImg from '$lib/imgs/unip.jpg';
import MairoVergaraImg from '$lib/imgs/inglesmairovergara.jpg';
import CriatorImg from '$lib/imgs/CRIAITOR.jpg';
import ExpliqueMeImg from '$lib/imgs/ExplicaMe.jpg';
import TwinteriorImg from '$lib/imgs/twinterior.jpeg';
import EstacaoMetereologicaImg from '$lib/imgs/estacaoMeteorologica.jpg';

export let DATA = {
	name: 'Gabriel Alves',
	initials: 'GA',
	url: 'https://github.com/galvessantos',
	location: 'Sorocaba, São Paulo - Brasil',
	avatarUrl: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	description: 'Software Developer — Java, Spring Boot, Angular',
	img: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	skills: [
		'java',
		'spring-boot',
		'typescript',
		'angular',
		'apis-restful',
		'swagger-openapi',
		'docker',
		'postgresql',
		'mysql',
		'git',
		'azure-devops',
		'sonarqube',
		'junit-mockito',
		'agile'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' },
		{ href: '#contact', icon: Mail, label: 'Contact' }
	],
	contact: {
		email: 'gabrielww1@hotmail.com',
		tel: '+55 (15) 99811-6521',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/galvessantos',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/galvessantos/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Montreal',
			i18n: 'montreal',
			href: 'https://montreal.com.br/',
			badges: [],
			logoUrl: MontrealImg
		},
		{
			company: 'OPmobility',
			i18n: 'opmobility',
			badges: [],
			href: 'https://www.opmobility.com/en/',
			logoUrl: OpMobilityImg
		},
		{
			company: 'Clarios',
			i18n: 'clarios',
			href: 'https://www.clarios.com/pt',
			badges: [],
			logoUrl: ClariosImg
		}
	],
	education: [
		{
			school: 'Universidade Paulista',
			href: 'https://www.unip.br',
			degree: 'Ciência da Computação',
			logoUrl: UnipImg,
			start: '2023',
			end: '2026'
		}
	],
	languages: [
		{
			school: 'Mairo Vergara',
			i18n: 'mairo-vergara',
			href: 'https://www.mairovergara.com/',
			logoUrl: MairoVergaraImg,
		}
	],
	projects: [
		{
			i18n: 'criaitor',
			href: 'https://criaitor-front.vercel.app/',
			active: true,
			technologies: [
				'Java',
				'Spring Boot',
				'Typescript',
				'React',
				'PostgreSQL',
				'Ollama API',
				'SonarQube',
				'Swagger/OpenAPI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://criaitor-front.vercel.app/',
					icon: Globe
				},
				{
					type: 'Backend',
					href: 'https://github.com/montreal-acelera-maker-squad02/projeto-gerador-ideias-backend',
					icon: Github
				},
				{
					type: 'Frontend',
					href: 'https://github.com/igorsantos2102/projeto-gerador-ideias-frontend',
					icon: Github
				}
			],
			image: CriatorImg,
			video: ''
		},
		{
			i18n: 'explicame',
			href: 'https://me-explique.vercel.app/',
			active: true,
			technologies: [
				'Java',
				'Spring Boot',
				'Typescript',
				'Angular',
				'Tesseract',
				'Web Speech API',
				'Google Cloud TTS'
			],
			links: [
				{
					type: 'Website',
					href: 'https://me-explique.vercel.app/',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/galvessantos/me-explique',
					icon: Github
				}
			],
			image: ExpliqueMeImg,
			video: ''
		},
		{
			i18n: 'twinterior',
			href: 'https://projeto-blog-aceleramaker-frontend1.vercel.app/#/login',
			active: true,
			technologies: [
				'Java',
				'Spring Boot',
				'Typescript',
				'Angular',
				'MySQL',
				'SonarQube',
				'Swagger/OpenAPI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://projeto-blog-aceleramaker-frontend1.vercel.app/#/login',
					icon: Globe
				},
				{
					type: 'Backend',
					href: 'https://github.com/galvessantos/projeto-blog-aceleramaker-backend',
					icon: Github
				},
				{
					type: 'Frontend',
					href: 'https://github.com/galvessantos/projeto-blog-aceleramaker-frontend1',
					icon: Github
				}
			],
			image: TwinteriorImg,
			video: ''
		},
		{
			i18n: 'estacao-meteorologica',
			active: true,
			technologies: ['Java', 'JSF', 'Hibernate', 'C', 'JavaScript', 'SQLServer', 'Arduino'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/galvessantos/projeto-sensor-chuva-java-sql-javascript',
					icon: Github
				}
			],
			image: EstacaoMetereologicaImg,
			video: ''
		}
	]
};