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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 4h-1.101A5.01 5.01 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.899 4H5C2.243 4 0 6.243 0 9v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5Zm-8-2h2c1.304 0 2.415.836 2.828 2H8.172A3.004 3.004 0 0 1 11 2Zm11 17c0 1.654-1.346 3-3 3h-1V9a1 1 0 1 0-2 0v13H8V9a1 1 0 1 0-2 0v13H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v10Z"/></svg>
  