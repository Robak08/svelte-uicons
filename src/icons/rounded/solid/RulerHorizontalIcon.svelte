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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.609 6.96H3.5a3.5 3.5 0 0 0-3.5 3.5v3.04A3.5 3.5 0 0 0 3.5 17h1.524v-3a1 1 0 1 1 2 0v3h2.021v-3a1 1 0 1 1 2 0v3h2.02v-3a1 1 0 1 1 2 0v3h2.021v-3a1 1 0 1 1 2 0v3h1.524a3.5 3.5 0 0 0 3.5-3.5v-3.04a3.5 3.5 0 0 0-3.5-3.5Z"/></svg>
  