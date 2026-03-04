<script>
  import { _ } from 'svelte-i18n';
  import { Phone, Email } from 'carbon-icons-svelte';
</script>

<svelte:head>
  <title>{$_('contact.title')} — Aqua Installatie</title>
  <meta name="description" content="Contactgegevens en contactformulier voor Aqua Installatie." />
</svelte:head>

<div class="container">
  <h1>{$_('contact.title')}</h1>

  <div style="display:grid; grid-template-columns:1fr 320px; gap:1.25rem; align-items:start; margin-top:1rem;">
    <div>
      <p>{$_('contact.intro')}</p>

      <form style="display:grid; gap:0.5rem; margin-top:0.5rem;">
        <input placeholder={$_('contact.form.name')} />
        <input placeholder={$_('contact.form.email')} type="email" />
        <input placeholder={$_('contact.form.phone')} type="tel" />
        <textarea placeholder={$_('contact.form.message')} rows="5"></textarea>
        <button class="cta" type="button">{$_('contact.form.send')}</button>
      </form>
    </div>

    <aside class="card">
      <strong>{$_('contact.info')}</strong>
      <p class="muted"><em>{$_('contact.dummy')}</em><br />{$_('contact.address')}<br />Stationsweg 12<br />1234 AB Groningen</p>
      <p style="display:flex; gap:0.5rem; align-items:center;"><Phone size={16} /><strong>{$_('footer.phone')}</strong> <a href="tel:+31612345678">06 12 34 56 78</a></p>
      <p style="display:flex; gap:0.5rem; align-items:center;"><Email size={16} /><strong>{$_('footer.email')}</strong> <a href="mailto:info@aqua-installatie.nl">info@aqua-installatie.nl</a></p>
      <p class="muted">{$_('footer.emergency')}</p>
    </aside>
  </div>
</div>

<style>
  input, textarea { padding:0.6rem; border-radius:8px; border:1px solid #e6eef0; }
  form button { border:none; cursor:pointer; }
</style>
