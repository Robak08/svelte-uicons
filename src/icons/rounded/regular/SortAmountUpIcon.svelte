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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h13a1 1 0 0 1 1 1ZM9 18a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H10a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1Zm.121-4.707L6.413.584a2.006 2.006 0 0 0-2.828 0L.878 3.293a.999.999 0 1 0 1.414 1.414L4 2.999V23a1 1 0 1 0 2 0V2.999l1.707 1.708a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"/></svg>
  