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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 19a1 1 0 1 1 0-2h2.949v-2H14a1 1 0 1 1 0-2h2.949v-2H14a1 1 0 1 1 0-2h2.949V7H14a1 1 0 1 1 0-2h2.949V3.5a3.5 3.5 0 0 0-3.5-3.5h-3a3.5 3.5 0 0 0-3.5 3.5v17a3.5 3.5 0 0 0 3.5 3.5h3a3.5 3.5 0 0 0 3.5-3.5V19H14Z"/></svg>
  