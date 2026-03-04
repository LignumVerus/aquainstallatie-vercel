<script>
  import { _ } from 'svelte-i18n';
  import { Phone, Email } from 'carbon-icons-svelte';
  import { Button, TextInput, TextArea } from 'carbon-components-svelte';
</script>

<svelte:head>
  <title>{$_('contact.title')} — Aqua Installatie</title>
  <meta name="description" content="Contactgegevens en contactformulier voor Aqua Installatie." />
</svelte:head>

<div class="container">
  <div style="display:grid; grid-template-columns:1fr 320px; gap:1.25rem; align-items:start; margin-top:1rem;">
    <div class="content-box">
      <h1>{$_('contact.title')}</h1>

      <p>{$_('contact.intro')}</p>

      <form style="display:grid; gap:1rem; margin-top:0.5rem;">
        <TextInput placeholder={$_('contact.form.name')} labelText={$_('contact.form.name')} />
        <TextInput placeholder={$_('contact.form.email')} type="email" labelText={$_('contact.form.email')} />
        <TextInput placeholder={$_('contact.form.phone')} type="tel" labelText={$_('contact.form.phone')} />
        <TextArea placeholder={$_('contact.form.message')} labelText={$_('contact.form.message')} rows={5} />
        <Button class="cta" type="submit" kind="primary">{$_('contact.form.send')}</Button>
      </form>
    </div>

    <div class="content-box">
      <strong>{$_('contact.info')}</strong>
      <p class="muted"><em>{$_('contact.dummy')}</em><br />{$_('contact.address')}<br />Stationsweg 12<br />1234 AB Groningen</p>
      <p style="display:flex; gap:0.5rem; align-items:center;"><Phone size={16} /><strong>{$_('footer.phone')}</strong> <a href="tel:+31612345678">06 12 34 56 78</a></p>
      <p style="display:flex; gap:0.5rem; align-items:center;"><Email size={16} /><strong>{$_('footer.email')}</strong> <a href="mailto:info@aqua-installatie.nl">info@aqua-installatie.nl</a></p>
      <p class="muted">{$_('footer.emergency')}</p>
    </div>
  </div>
</div>
