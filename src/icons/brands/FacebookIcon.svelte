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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12.073c0 5.989-4.394 10.954-10.13 11.855v-8.363h2.789l.531-3.46h-3.32V9.86c0-.947.464-1.869 1.95-1.869h1.509V5.045s-1.37-.234-2.679-.234c-2.734 0-4.52 1.657-4.52 4.656v2.637H7.091v3.46h3.039v8.363C4.395 23.025 0 18.061 0 12.073c0-6.627 5.373-12 12-12s12 5.372 12 12z"/></svg>
  