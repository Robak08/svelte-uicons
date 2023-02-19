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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-hotel {customClass}"><path d="M16 0H8C5.243 0 3 2.243 3 5v14c0 2.757 2.243 5 5 5h2a1 1 0 0 0 1-1v-5h2v5a1 1 0 0 0 1 1h2c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3h-1v-4h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h1v4H8c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v14Zm-8-6a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-5-8a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-5 4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Z"/></svg>
  