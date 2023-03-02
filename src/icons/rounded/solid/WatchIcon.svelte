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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 2.897c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9Zm2.707 11.81a.997.997 0 0 1-1.414 0l-2-2A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.586l1.707 1.707a.999.999 0 0 1 0 1.414ZM6 2.785V1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.785C16.273 1.657 14.212 1 12 1s-4.273.657-6 1.785Zm12 18.43V23a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.785C7.727 22.343 9.788 23 12 23s4.273-.657 6-1.785Z"/></svg>
  