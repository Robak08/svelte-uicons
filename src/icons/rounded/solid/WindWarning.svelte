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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 24a4.241 4.241 0 0 1-3.943-2.667 1 1 0 1 1 1.886-.666C9.72 22.649 12.991 22.337 13 20a2 2 0 0 0-2-2H1a1 1 0 0 1 0-2h10c5.276.139 5.272 7.863 0 8Zm9-5a4.241 4.241 0 0 1-3.943-2.667 1 1 0 0 1 1.886-.666c.777 1.982 4.048 1.67 4.057-.667a2 2 0 0 0-2-2h-5a1 1 0 0 1 0-2h5c5.276.139 5.272 7.863 0 8Zm0-10h-3a1 1 0 0 1 0-2h3a2 2 0 0 0 2-2c-.009-2.337-3.281-2.648-4.057-.667a1 1 0 1 1-1.886-.666C17.616-.415 23.952.421 24 5a4 4 0 0 1-4 4ZM7 0c-9.251.294-9.249 13.707 0 14 9.251-.294 9.249-13.707 0-14Zm0 11a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z"/></svg>
  