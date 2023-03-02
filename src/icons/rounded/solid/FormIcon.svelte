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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5H16zM14 12h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm2-5a2 2 0 0 1-2-2V0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7zm0 13H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm-2-4h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 0 6z"/></svg>
  