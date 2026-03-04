<script>
	import Header from '$lib/header/Header.svelte';
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import '../app.css';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }
</script>

<Header />

<main class="container">
	<slot />
</main>

<footer class="site-footer">
	<div class="container" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;">
		<div style="min-width:220px;">
			<div class="logo-inline">
				<img src="/logo.svg" alt="Aqua Installatie" />
			</div>
			<p class="muted">Aqua Installatie — Loodgietersbedrijf • 24/7 storingsdienst • Noord-Nederland</p>
		</div>

		<div class="muted" style="min-width:200px;">
			<strong>Contact</strong>
			<p>Telefoon: <a href="tel:+31612345678">06 12 34 56 78</a><br />E-mail: <a href="mailto:info@aqua-installatie.nl">info@aqua-installatie.nl</a></p>
		</div>

		<div class="muted" style="min-width:200px;">
			<strong>Openingstijden</strong>
			<p>Ma - Vr: 08:00 - 18:00<br />Storingen: ??? bereikbaar</p>
		</div>
	</div>

	<div style="text-align:center; padding-top:1rem; color:var(--muted);">© {new Date().getFullYear()} Aqua Installatie — Alle rechten voorbehouden</div>
</footer>

<style>
	main { flex: 1; }
</style>
