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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m19.854 10.293-.316-1.263A3.994 3.994 0 0 0 15.657 6H7.136l.144-.65A2.983 2.983 0 0 1 10.209 3H17a1 1 0 0 0 0-2h-6.791a4.973 4.973 0 0 0-4.882 3.916L4.131 10.3A6.012 6.012 0 0 0 0 16v2a6.006 6.006 0 0 0 6 6h12a6.006 6.006 0 0 0 6-6v-2a6.011 6.011 0 0 0-4.146-5.707ZM15.657 8A2 2 0 0 1 17.6 9.515l.12.485H6.247l.444-2ZM6 12h12a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4Zm12 10H6a4 4 0 0 1-4-4h20a4 4 0 0 1-4 4Z"/></svg>
  