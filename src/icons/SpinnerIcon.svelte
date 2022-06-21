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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-spinner {customClass}"><path d="M12 24A12 12 0 1 1 22.714 6.59a1 1 0 1 1-1.785.9 10 10 0 1 0-.011 9.038 1 1 0 0 1 1.781.908A11.955 11.955 0 0 1 12 24Z"/></svg>
  