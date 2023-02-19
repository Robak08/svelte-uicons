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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-notdef {customClass}"><path d="M16 0H8C5.24 0 3 2.24 3 5v14c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm-2.76 12 5.65-7.77c.07.25.11.5.11.77v14c0 .27-.05.52-.11.77L13.24 12ZM16 2c.62 0 1.19.19 1.67.51L12 10.3 6.33 2.51C6.81 2.19 7.38 2 8 2h8ZM5.11 19.77c-.07-.25-.11-.5-.11-.77V5c0-.27.05-.52.11-.77L10.76 12l-5.65 7.77ZM8 22c-.62 0-1.19-.19-1.67-.51L12 13.7l5.67 7.79c-.48.32-1.05.51-1.67.51H8Z"/></svg>
  