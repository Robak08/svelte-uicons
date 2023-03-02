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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 23a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2 5.006 5.006 0 0 0 5-5v-1h10v1a5.006 5.006 0 0 0 5 5 1 1 0 0 1 1 1ZM5 14h14a1 1 0 0 0 0-2h-2.111a7 7 0 1 0-9.778 0H5a1 1 0 0 0 0 2Z"/></svg>
  