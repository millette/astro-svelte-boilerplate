<h1>Number is: {dice}</h1>
<div>Number of rolls: {rolls.length}</div>
<div>Total: {total}</div>
<button class="btn btn-primary" on:click={roll}>Let's roll the dice</button>
<button class="btn btn-warning" on:click={restart}>Restart</button>

<p>
    { rolls.toString() }
</p>
<div class="m-2">
  <label>One-time code
  <input
  class="input input-bordered"
  type="text"
  autocomplete="one-time-code"
  inputmode="numeric"
  maxlength="6"
  pattern="\d{6}"
>
</label>
</div>
<div>
    {#each rolls as t, index}
        {#if index == rolls.length -1}
            <b style="background-color: lightgreen;">{t}</b>
        {:else}
            {t} -&nbsp;
        {/if}

    {/each}
</div>

<script>
    let dice = 0;
    let rolls = [];
    $: total = rolls.reduce((t, n) => t + n, 0)

    function roll() {
        dice = Math.floor(Math.random() * Math.floor(5)) + 1
        rolls = [...rolls, dice]
    }
    function restart() {
        dice = 0
        rolls = []
    }
</script>
