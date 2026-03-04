<script>
	import Header from '$lib/header/Header.svelte';
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import { _, locale } from 'svelte-i18n';
  import '$lib/i18n/config';
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
			<p class="muted">{$_('footer.description')}</p>
		</div>

		<div class="muted" style="min-width:200px;">
			<strong>{$_('footer.contact')}</strong>
			<p>{$_('footer.phone')} <a href="tel:+31612345678">06 12 34 56 78</a><br />{$_('footer.email')} <a href="mailto:info@aqua-installatie.nl">info@aqua-installatie.nl</a></p>
		</div>

		<div class="muted" style="min-width:200px;">
			<strong>{$_('footer.hours')}</strong>
			<p>{$_('footer.weekday')}<br />{$_('footer.emergency')}</p>
		</div>
	</div>

	<div style="text-align:center; padding-top:1rem; color:var(--muted);">{$_('footer.copyright', { values: { year: new Date().getFullYear() } })}</div>
</footer>

<style>
	main { flex: 1; }
</style>
