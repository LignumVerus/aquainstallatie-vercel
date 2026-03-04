<script>
  import { page } from '$app/stores';
  import { locale } from 'svelte-i18n';
  import { Translate } from 'carbon-icons-svelte';
</script>

<header class="site-header">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;">
	<div class="logo-inline">
	  <a href="/">
		<img src="/logo.svg" alt="Aqua Installatie" />
	  </a>
	</div>

	<nav aria-label="Main navigation">
	  <ul class="main-nav">
		<li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
		<li class:active={$page.url.pathname === '/services'}><a href="/services">Diensten</a></li>
		<li class:active={$page.url.pathname === '/about'}><a href="/about">Over ons</a></li>
		<li class:active={$page.url.pathname === '/contact'}><a href="/contact">Contact</a></li>
	  </ul>
	</nav>

	<div class="header-actions">
	  <button class="lang-switch" on:click={() => $locale = $locale === 'nl' ? 'en' : 'nl'} title="Switch language">
		<Translate size={20} />
		<span>{$locale === 'nl' ? 'EN' : 'NL'}</span>
	  </button>
	  <a class="cta" href="tel:+31612345678">06 12 34 56 78</a>
	</div>
  </div>
</header>

<style>
  .site-header { padding: 0; background: #ffffff; }
  .main-nav { display:flex; gap:1rem; list-style:none; margin:0; padding:0; align-items:center; }
  .main-nav a { color: var(--text); font-weight:600; text-decoration:none; padding:0.35rem 0.6rem; border-radius:6px; }
  .main-nav li.active a { background: rgba(14,165,164,0.08); color:var(--primary); }
  .main-nav a:hover { color:var(--primary); }
  .cta { background:var(--primary); color:#fff; padding:0.5rem 0.85rem; border-radius:8px; text-decoration:none; font-weight:700; }
  .logo-inline img { height:38px; }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .lang-switch {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.2s ease;
  }
  
  .lang-switch:hover {
    background: rgba(14,165,164,0.1);
  }
</style>
