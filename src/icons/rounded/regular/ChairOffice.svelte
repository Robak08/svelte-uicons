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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 11c0-2.206-1.794-4-4-4V5c0-2.757-2.243-5-5-5h-4C7.243 0 5 2.243 5 5v2c-2.206 0-4 1.794-4 4v5l.001.052A3.003 3.003 0 0 0 4 19h7v3H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-4v-3h7a3.003 3.003 0 0 0 2.999-2.948L23 16v-5Zm-2 0v2.172A2.984 2.984 0 0 0 20 13h-1V9c1.103 0 2 .897 2 2ZM7 5c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v8H7V5ZM5 9v4H4c-.351 0-.687.061-1 .172V11c0-1.103.897-2 2-2Zm15 8H4a1.001 1.001 0 0 1 0-2h16a1.001 1.001 0 0 1 0 2Z"/></svg>
  