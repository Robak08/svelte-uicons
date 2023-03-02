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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 8h.4S6.307 6.318 6.288 6.277A3 3 0 0 1 9 2h2V1a1 1 0 0 1 2 0v1h2a3 3 0 0 1 2.715 4.277C17.7 6.318 16.608 8 16.608 8H17a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm13 12H4a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4Zm-3.589-8H7.589a27.85 27.85 0 0 1-2.2 6h13.217a27.754 27.754 0 0 1-2.195-6Z"/></svg>
  