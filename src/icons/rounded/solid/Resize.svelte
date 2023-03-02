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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 18h2v1a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-3a5.006 5.006 0 0 1 5-5h1v2a5.006 5.006 0 0 0 5 5zm-3-5a3 3 0 0 0 3 3 3 3 0 0 0-3-3zM19 0h-8a5.006 5.006 0 0 0-5 5v6h2a4.969 4.969 0 0 1 2.753.833L16.586 6H14a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-2 0V7.414l-5.833 5.833A4.969 4.969 0 0 1 13 16v2h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5z"/></svg>
  