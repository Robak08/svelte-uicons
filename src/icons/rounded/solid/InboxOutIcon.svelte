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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 15v4c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-4c0-1.654 1.346-3 3-3h3c1.103 0 2 .897 2 2s.897 2 2 2h4c1.103 0 2-.897 2-2s.897-2 2-2h3c1.654 0 3 1.346 3 3ZM8.707 5.293 11 3v7a1 1 0 1 0 2 0V3l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414.586a1.99 1.99 0 0 0-1.4-.583L12 0l-.014.003a1.989 1.989 0 0 0-1.4.583L7.293 3.879a.999.999 0 1 0 1.414 1.414Z"/></svg>
  