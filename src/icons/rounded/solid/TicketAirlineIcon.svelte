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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 10a1 1 0 0 0 1-1V8c0-2.757-2.243-5-5-5H6v2a1 1 0 1 1-2 0V3.101A5.01 5.01 0 0 0 0 8v8a5.01 5.01 0 0 0 4 4.899V19a1 1 0 1 1 2 0v2h13c2.757 0 5-2.243 5-5v-1a1 1 0 0 0-1-1c-1.103 0-2-.897-2-2s.897-2 2-2ZM6 15a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1Zm0-5a1 1 0 1 1-2 0V9a1 1 0 1 1 2 0v1Zm11 3h-1.5l-1.911 2.421a1.111 1.111 0 0 1-.975.579h-.32a.543.543 0 0 1-.506-.74l.879-2.26h-1.32a1.5 1.5 0 0 1-1.147-.533l-1.096-1.3a.78.78 0 0 1 1.228-.939l1.11.772h1.241l-.891-2.258A.543.543 0 0 1 12.297 8h.298c.407 0 .781.222.975.579L15.499 11h1.5a1 1 0 0 1 0 2Z"/></svg>
  