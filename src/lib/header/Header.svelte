<script>
  import { page } from '$app/stores';
</script>

<header class="site-header">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;">
	<div class="logo-inline">
	  <a href="/">
		<img src="/logo.svg" alt="Aqua Installatie" />
	  </a>
	</div>

	<nav aria-label="Main navigation">
	  <ul class="main-nav">
		<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.url.pathname === '/services'}><a sveltekit:prefetch href="/services">Diensten</a></li>
		<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">Over ons</a></li>
		<li class:active={$page.url.pathname === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
	  </ul>
	</nav>

	<div>
	  <a class="cta" href="tel:+31612345678">06 12 34 56 78</a>
	</div>
  </div>
</header>

<style>
  .site-header { padding: 0.8rem 0; background: transparent; }
  .main-nav { display:flex; gap:1rem; list-style:none; margin:0; padding:0; align-items:center; }
  .main-nav a { color: var(--text); font-weight:600; text-decoration:none; padding:0.35rem 0.6rem; border-radius:6px; }
  .main-nav li.active a { background: rgba(14,165,164,0.08); color:var(--primary); }
  .main-nav a:hover { color:var(--primary); }
  .cta { background:var(--primary); color:#fff; padding:0.5rem 0.85rem; border-radius:8px; text-decoration:none; font-weight:700; }
  .logo-inline img { height:38px; }
</style>
