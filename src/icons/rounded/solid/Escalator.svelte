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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm.544 22.58L20.366 13h.134c1.93 0 3.5-1.57 3.5-3.5S22.43 6 20.5 6h-1.669a6.004 6.004 0 0 0-3.875 1.42L3.634 17H3.5C1.57 17 0 18.57 0 20.5S1.57 24 3.5 24h1.669a6.004 6.004 0 0 0 3.875-1.42Zm2.455-14.855A3.49 3.49 0 0 0 8.5 6C6.57 6 5 7.57 5 9.5v3.725l6.499-5.5Z"/></svg>
  