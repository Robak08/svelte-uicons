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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 11c0-2.206-1.794-4-4-4V5c0-2.757-2.243-5-5-5h-4C7.243 0 5 2.243 5 5v2c-2.206 0-4 1.794-4 4v5.5C1 17.879 2.121 19 3.5 19H11v3H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-4v-3h7.5c1.379 0 2.5-1.121 2.5-2.5V11ZM3.5 14c-.171 0-.338.018-.5.051V11c0-1.103.897-2 2-2v3h14V9c1.103 0 2 .897 2 2v3.051a2.502 2.502 0 0 0-.5-.051h-17Z"/></svg>
  