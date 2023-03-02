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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 7a1 1 0 0 1 1-1h.537a4 4 0 1 1 6.926 0H16a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1Zm13 13H4a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4Zm-4.933-10H8.933C8.569 15.261 6.775 18 5 18h14c-1.775 0-3.569-2.739-3.933-8Z"/></svg>
  