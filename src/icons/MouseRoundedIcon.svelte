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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-mouse {customClass}"><path d="M13 3V1a1 1 0 0 0-2 0v2a7.008 7.008 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.008 7.008 0 0 0-7-7Zm5 13a6 6 0 0 1-12 0v-6a5.006 5.006 0 0 1 5-5h2a5.006 5.006 0 0 1 5 5Z"/><path d="M12 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z"/></svg>
  