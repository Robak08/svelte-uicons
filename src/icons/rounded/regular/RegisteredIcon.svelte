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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm2.573-9.322A4.006 4.006 0 0 0 17 9c0-2.206-1.794-4-4-4h-3C8.346 5 7 6.346 7 8v9a1 1 0 1 0 2 0v-4h3.434l2.709 4.515a1 1 0 0 0 1.715-1.03l-2.285-3.808ZM9 8c0-.552.449-1 1-1h3a2.001 2.001 0 0 1 .005 4H9V8Z"/></svg>
  