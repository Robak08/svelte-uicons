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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 24H7c-2.757 0-5-2.243-5-5v-1c.006-1.308 1.995-1.307 2 0v1c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V1c.006-1.308 1.995-1.307 2 0v18c0 2.757-2.243 5-5 5Z"/></svg>
  