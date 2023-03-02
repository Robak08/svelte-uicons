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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5ZM7 2h10c1.654 0 3 1.346 3 3H4c0-1.654 1.346-3 3-3Zm10 20H7c-1.654 0-3-1.346-3-3V7h16v12c0 1.654-1.346 3-3 3Zm0-11a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Zm-4 4a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Z"/></svg>
  