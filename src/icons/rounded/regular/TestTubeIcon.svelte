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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 0H6a1 1 0 0 0 0 2h1v17a5 5 0 0 0 10 0V2h1a1 1 0 0 0 0-2zm-6 22a3 3 0 0 1-3-3V9h6v10a3 3 0 0 1-3 3zm3-15H9V2h6z"/></svg>
  