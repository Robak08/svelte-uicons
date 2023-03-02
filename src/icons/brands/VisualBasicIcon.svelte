<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.992 3.781a1.502 1.502 0 0 0-.841-1.191L18.206.21A1.499 1.499 0 0 0 16.5.5L8.527 9.315 3.875 5.5l-.408-.338A1.002 1.002 0 0 0 2.432 5l-1.817.75A.999.999 0 0 0 0 6.668v10.665a.997.997 0 0 0 .615.917l1.817.763a1 1 0 0 0 1.035-.163l.408-.35 4.652-3.815L16.5 23.5a1.499 1.499 0 0 0 1.705.29l4.945-2.38a1.5 1.5 0 0 0 .85-1.35V3.94a1.66 1.66 0 0 0-.008-.159zM3 15.426V8.574L6.099 12 3 15.426zM11.803 12 18 6.919v10.162L11.803 12z"/><path d="m3.875 5.5-.408-.338A1.002 1.002 0 0 0 2.432 5a.999.999 0 0 1 1.035.15l.408.35zM23.992 20.22a1.5 1.5 0 0 1-.841 1.193l-4.945 2.377 4.945-2.38c.47-.227.785-.679.841-1.19zM23.15 2.59 18.205.21l4.945 2.377c.472.227.787.68.841 1.193a1.5 1.5 0 0 0-.841-1.19z"/></svg>
  