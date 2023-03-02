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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 13H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1s-.45 1-1 1Zm-9.31-4.75 4.81-5.11c.51-.56.64-1.33.33-2.02S17.87 0 17.11 0H6.88c-.75 0-1.41.43-1.72 1.12s-.18 1.46.34 2.03l4.79 5.08c.44.49 1.06.76 1.71.76s1.27-.28 1.69-.75Zm5.15 14.63c.3-.69.18-1.46-.34-2.03l-4.79-5.08c-.87-.97-2.57-.95-3.4-.02L5.5 20.86c-.51.56-.64 1.33-.33 2.02S6.13 24 6.89 24h10.25c.75 0 1.41-.43 1.72-1.12Z"/></svg>
  