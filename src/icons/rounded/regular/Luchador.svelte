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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 16h-2a2 2 0 0 1-2-2v-1a3 3 0 0 1 3-3h1a1 1 0 0 0 1-1 1 1 0 0 1 2 0v4a3 3 0 0 1-3 3Zm-1-4a1 1 0 0 0-1 1v1h2a1 1 0 0 0 1-1v-1.171A3.009 3.009 0 0 1 17 12Zm-7 4H7a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0 1 1 0 0 0 1 1h1a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2Zm-3-4.171V13a1 1 0 0 0 1 1h2v-1a1 1 0 0 0-1-1H7a3 3 0 0 1-1-.171ZM19 24h-1.037a4 4 0 0 1-3.512-2.085l-.371-.681a2.37 2.37 0 0 0-4.16 0l-.371.68A4 4 0 0 1 6.037 24H5a5.006 5.006 0 0 1-5-5v-6.635A12.248 12.248 0 0 1 11.775 0 12 12 0 0 1 24 12v7a5.006 5.006 0 0 1-5 5Zm-7-6a4.369 4.369 0 0 1 3.836 2.277l.371.681A2 2 0 0 0 17.963 22H19a3 3 0 0 0 3-3v-7A10 10 0 0 0 11.812 2 10.238 10.238 0 0 0 2 12.365V19a3 3 0 0 0 3 3h1.037a2 2 0 0 0 1.756-1.042l.371-.681A4.369 4.369 0 0 1 12 18Z"/></svg>
  