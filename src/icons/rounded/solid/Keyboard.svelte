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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 6h-6V3a1 1 0 0 0-2 0v3H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5Zm-9 4h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2Zm-5 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1-4H5a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm9 4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z"/></svg>
  