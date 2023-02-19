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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-battery-quarter {customClass}"><path d="M23 8h-1.101A5.01 5.01 0 0 0 17 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h12a5.009 5.009 0 0 0 4.899-4H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-6 10H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h12c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3ZM8 9v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"/></svg>
  