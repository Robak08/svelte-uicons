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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h9V5a5 5 0 0 0-5-5zM5 19H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm5 12H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm9-2h-3v19h3a5.006 5.006 0 0 0 5-5v-9a5.006 5.006 0 0 0-5-5zm1 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></svg>
  