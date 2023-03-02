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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 22H6.884A6.934 6.934 0 0 0 8 18v-4h7a1 1 0 0 0 0-2H8V8a6 6 0 0 1 12 0 1 1 0 0 0 2 0A8 8 0 0 0 6 8v4H4a1 1 0 0 0 0 2h2v4c0 1.2-.292 4-3 4a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/></svg>
  