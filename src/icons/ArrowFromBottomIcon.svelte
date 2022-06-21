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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-from-bottom {customClass}"><path d="M18 22h-5V2.823l4.3 4.3a1 1 0 0 0 1.414-1.414L13.768.763a2.5 2.5 0 0 0-3.536 0l-4.95 4.95A1 1 0 0 0 6.7 7.127l4.3-4.3V22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z"/></svg>
  