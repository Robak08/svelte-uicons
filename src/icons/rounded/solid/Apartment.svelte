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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 5.101V5c0-2.757-2.243-5-5-5H9C6.243 0 4 2.243 4 5v4.101A5.009 5.009 0 0 0 0 14v5c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-9a5.008 5.008 0 0 0-4-4.899ZM5 19H4a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4H4a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm5 4H9a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4H9a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4H9a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4H9a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm5 12h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm5 12h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/></svg>
  