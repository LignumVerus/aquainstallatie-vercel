<svelte:head>
  <title>Contact — Aqua Installatie</title>
  <meta name="description" content="Contactgegevens en contactformulier voor Aqua Installatie." />
</svelte:head>

<div class="container">
  <h1>Contact</h1>

  <div style="display:grid; grid-template-columns:1fr 320px; gap:1.25rem; align-items:start; margin-top:1rem;">
    <div>
      <p>Neem contact op voor een offerte, afspraak of storingsmelding. We reageren snel en geven een duidelijke prijsindicatie.</p>

      <form style="display:grid; gap:0.5rem; margin-top:0.5rem;">
        <input placeholder="Naam" />
        <input placeholder="E-mail" />
        <input placeholder="Telefoon" />
        <textarea placeholder="Uw bericht" rows="5"></textarea>
        <button class="cta" type="button">Verstuur</button>
      </form>
    </div>

    <aside class="card">
      <strong>Contactgegevens</strong>
      <p class="muted">Aqua Installatie<br />Straat 1<br />1234 AB Plaatsnaam</p>
      <p><strong>Telefoon:</strong> <a href="tel:+31612345678">06 12 34 56 78</a><br /><strong>E-mail:</strong> <a href="mailto:dummy@aqua-installatie.nl">dummy@aqua-installatie.nl</a></p>
      <p class="muted">Storingen: ??? bereikbaar</p>
    </aside>
  </div>
</div>

<style>
  input, textarea { padding:0.6rem; border-radius:8px; border:1px solid #e6eef0; }
  form button { border:none; cursor:pointer; }
</style>
