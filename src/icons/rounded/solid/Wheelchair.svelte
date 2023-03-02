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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 3a3 3 0 1 1 3 3 3 3 0 0 1-3-3Zm15 18h-1.279L20.4 17.051A3 3 0 0 0 17.559 15H14a2 2 0 0 1-2-2h6a1 1 0 0 0 0-2h-6V8a1 1 0 0 0-2 0v5a4 4 0 0 0 4 4h3.559a1 1 0 0 1 .949.684l1.544 4.632A1 1 0 0 0 21 23h2a1 1 0 0 0 0-2Zm-9.214-2.012A5.973 5.973 0 0 1 8 13V9.071a1 1 0 0 0-1.142-.99A8.005 8.005 0 0 0 7.87 24H8a7.993 7.993 0 0 0 6.573-3.442 1 1 0 0 0-.786-1.57Z"/></svg>
  