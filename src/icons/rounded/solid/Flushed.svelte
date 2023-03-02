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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 11a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm8-2a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm8 3a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12ZM8 13a3 3 0 0 0 0-6 3 3 0 0 0 0 6Zm9 4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1Zm2-7a3 3 0 0 0-6 0 3 3 0 0 0 6 0Z"/></svg>
  