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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cursor-text {customClass}"><path d="M18 22h-2a3 3 0 0 1-3-3v-3h3a1 1 0 0 0 0-2h-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2h-2a4.982 4.982 0 0 0-4 2.031A4.982 4.982 0 0 0 8 0H6a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v9H8a1 1 0 0 0 0 2h3v3a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h2a4.982 4.982 0 0 0 4-2.031A4.982 4.982 0 0 0 16 24h2a1 1 0 0 0 0-2Z"/></svg>
  