<script>
	import { _ } from 'svelte-i18n';
	import { Tools, Fire, WarningAlt } from 'carbon-icons-svelte';
</script>

<svelte:head>
	<title>Aqua Installatie — Loodgietersbedrijf</title>
	<meta name="description" content="Aqua Installatie — Loodgietersbedrijf: lekkage opsporing, cv, riool, onderhoud en 24/7 storingsdienst." />
</svelte:head>

<section class="hero">
	<div class="hero-card">
		<h1>Aqua Installatie</h1>
		<h2 class="muted">⚠️ Let op! Dit is een test website. U kunt geen rechten aan deze informatie ontlenen!</h2>
		<p>Wij leveren snelle, nette en duurzame oplossingen voor uw sanitair, verwarming en riool. Van lekkages en cv-installaties tot onderhoud en storingen — onze vakmensen staan klaar.</p>

		<p>
			<a class="cta" href="/contact">{$_('home.cta')}</a>
			<a style="margin-left:1rem; color:var(--muted);" href="/services">{$_('nav.services')}</a>
		</p>

		<div style="margin-top:1.5rem; display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem;">
			<div class="card" style="display:flex; flex-direction:column; gap:0.5rem;">
				<div style="display:flex; gap:0.5rem; align-items:center;">
					<Tools size={20} />
					<strong>Lekkage opsporen</strong>
				</div>
				<p class="muted">Snel en nauwkeurig, zonder onnodige hak- en breekwerk.</p>
			</div>
			<div class="card" style="display:flex; flex-direction:column; gap:0.5rem;">
				<div style="display:flex; gap:0.5rem; align-items:center;">
					<Fire size={20} />
					<strong>CV & Verwarming</strong>
				</div>
				<p class="muted">Installatie, reparatie en jaarlijkse onderhoudscontracten.</p>
			</div>
			<div class="card" style="display:flex; flex-direction:column; gap:0.5rem;">
				<div style="display:flex; gap:0.5rem; align-items:center;">
					<WarningAlt size={20} />
					<strong>24/7 Storingsdienst</strong>
				</div>
				<p class="muted">Direct bereikbaar bij spoed — ook ’s avonds en in het weekend.</p>
			</div>
		</div>
	</div>

	<aside>
		<img src="/hero.svg" alt="Aqua Installatie" style="width:100%; border-radius:12px; box-shadow:0 12px 30px rgba(14,165,164,0.08);" />
	</aside>
</section>

<style>
	.hero-card p { margin-bottom: 0.8rem; }
</style>