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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-square-up {customClass}"><path d="M5 24h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm4.293 5.879a1 1 0 0 0 1.414 0L11 7.587 11.007 18a1 1 0 0 0 2 0L13 7.586l3.293 3.293a1 1 0 1 0 1.438-1.389l-.024-.025-3.585-3.586a3 3 0 0 0-4.243 0L6.293 9.465a1 1 0 0 0 0 1.414Z"/></svg>
  