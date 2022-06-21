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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-earnings {customClass}"><path d="M19 0h-5a1 1 0 0 0 0 2h5a2.951 2.951 0 0 1 1.285.3L.293 22.293a1 1 0 1 0 1.414 1.414L21.7 3.715A2.951 2.951 0 0 1 22 5v5a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z"/><path d="M6 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM18 14a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"/></svg>
  