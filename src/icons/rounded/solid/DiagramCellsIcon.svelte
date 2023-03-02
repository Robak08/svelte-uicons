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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 10H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v2c0 2.21-1.79 4-4 4Zm0 14H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v2c0 2.21-1.79 4-4 4Z"/></svg>
  