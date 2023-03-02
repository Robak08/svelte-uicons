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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 0H4C1.794 0 0 1.794 0 4v3c0 2.206 1.794 4 4 4h3c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4Zm0 6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm13-6h-3c-2.206 0-4 1.794-4 4v3c0 2.206 1.794 4 4 4h3c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4Zm0 6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1ZM7 13H4c-2.206 0-4 1.794-4 4v3c0 2.206 1.794 4 4 4h3c2.206 0 4-1.794 4-4v-3c0-2.206-1.794-4-4-4Zm0 6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm8.5-2h-1a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5Zm3 3a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Zm-3 4h-1a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5Zm7-7h-1a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5Z"/></svg>
  