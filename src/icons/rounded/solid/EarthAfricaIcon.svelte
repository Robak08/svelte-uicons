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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm7.879 9.121a3 3 0 0 1-2.121.879h-2.257l.993.993c.325.325.507.765.507 1.224v1.303c0 .314-.085.622-.247.891l-2.495 4.159a.884.884 0 0 1-.759.43h-.807a.885.885 0 0 1-.859-.671l-.693-2.774a.734.734 0 0 0-.712-.556H9.002a2 2 0 0 1-2-2v-1.045c0-.597.298-1.154.795-1.485l1.756-1.17c.293-.195.638-.3.99-.3h2.633c.457 0 .827-.37.827-.827v-.831a.828.828 0 0 0-.242-.585l-.801-.801a.826.826 0 0 0-1.01-.124l-1.546.928c-.262.157-.561.24-.867.24h-.726a.808.808 0 0 1-.808-.808v-.826a.81.81 0 0 0-.276-.608L6.482 3.668a9.937 9.937 0 0 1 5.52-1.67c4.049 0 7.536 2.424 9.107 5.893L19.88 9.12Z"/></svg>
  