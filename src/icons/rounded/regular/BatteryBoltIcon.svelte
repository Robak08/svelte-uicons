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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 19a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V9c0-2.757 2.243-5 5-5h2a1 1 0 0 1 0 2H5C3.346 6 2 7.346 2 9v6c0 1.654 1.346 3 3 3h2a1 1 0 0 1 1 1Zm6.762-6.984A1.9 1.9 0 0 0 13.094 11l-4.011.05 3.031-5.572a1 1 0 0 0-1.756-.956s-3.255 5.998-3.274 6.063a1.84 1.84 0 0 0 .277 1.646c.357.481.942.769 1.563.769h4.042l-.013.025-2.743 5.53a1 1 0 1 0 1.792.888l2.72-5.484a1.957 1.957 0 0 0 .041-1.944ZM23 8h-1.101A5.01 5.01 0 0 0 17 4h-2a1 1 0 1 0 0 2h2c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3h-2a1 1 0 1 0 0 2h2a5.009 5.009 0 0 0 4.899-4H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z"/></svg>
  