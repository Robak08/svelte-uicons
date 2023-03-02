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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.5 21A2.5 2.5 0 0 1 3 18.5v-17A1.5 1.5 0 0 0 1.5 0 1.5 1.5 0 0 0 0 1.5v17A5.5 5.5 0 0 0 5.5 24h17a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z"/><path d="M19.5 18a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-3 0v6a1.5 1.5 0 0 0 1.5 1.5ZM7.5 18A1.5 1.5 0 0 0 9 16.5v-6a1.5 1.5 0 0 0-3 0v6A1.5 1.5 0 0 0 7.5 18ZM13.5 18a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11a1.5 1.5 0 0 0 1.5 1.5Z"/></svg>
  