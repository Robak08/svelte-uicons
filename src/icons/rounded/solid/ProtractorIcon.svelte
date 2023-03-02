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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.977 11.264C21.613 5.724 16.474 1.041 10.731 1A2 2 0 0 0 9 0H7a4 4 0 0 0-4 4v1h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v1a4 4 0 0 0 4 4h2a2 2 0 0 0 1.731-1H11a11.041 11.041 0 0 0 8.028-3.481 10.915 10.915 0 0 0 2.949-8.255zm-11.03 4.725A1 1 0 0 1 10 15V9a1 1 0 0 1 1-1 4 4 0 0 1 3.981 4.393 4.1 4.1 0 0 1-4.034 3.596z"/></svg>
  