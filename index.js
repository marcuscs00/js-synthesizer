const synth = new Tone.Synth().toDestination();

function randomFunc() {
  synth.triggerAttackRelease("C4", "8n");
}
