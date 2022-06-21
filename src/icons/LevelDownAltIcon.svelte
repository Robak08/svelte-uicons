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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-level-down-alt {customClass}"><path d="M17.087 17H13V5a5.006 5.006 0 0 0-5-5H1a1 1 0 0 0 0 2h7a3 3 0 0 1 3 3v12H6.913a.924.924 0 0 0-.644 1.575l5.087 5.155a.9.9 0 0 0 1.288 0l5.087-5.155A.924.924 0 0 0 17.087 17Z"/></svg>
  