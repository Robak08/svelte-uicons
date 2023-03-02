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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18a3 3 0 0 1-6 0v-1a1 1 0 0 0-1-1h-1v3a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-8h16v3h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0V8a2 2 0 0 1-2-2V3.414l-1.707-1.707A1 1 0 0 1 19.707.293l2.536 2.535A5.961 5.961 0 0 1 24 6.977V18ZM16 5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v4h16Z"/></svg>
  