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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 13.184V10a1 1 0 0 0-1-1V2.414A2.412 2.412 0 0 0 12.508.257l-2.622 1.31A3.4 3.4 0 0 0 8 4.62V9a1 1 0 0 0-1 1v3.184A3 3 0 0 0 5 16v3a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-3a3 3 0 0 0-2-2.816zM9 13v-2h6v2zm1-8.38a1.407 1.407 0 0 1 .781-1.264l2.619-1.31a.411.411 0 0 1 .6.368V9h-4zM17 19a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"/></svg>
  