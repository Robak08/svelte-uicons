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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 17v-4a5.01 5.01 0 0 1 4-4.899V13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.101c2.279.465 4 2.484 4 4.899v4H0Zm18-5V3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v9h12ZM5 24h14c2.757 0 5-2.243 5-5H0c0 2.757 2.243 5 5 5Z"/></svg>
  