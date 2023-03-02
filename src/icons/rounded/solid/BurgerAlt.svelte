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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.94 12H3.06c-.57 0-1.11-.24-1.49-.67-.38-.43-.56-1-.5-1.56C1.69 4.2 6.39 0 12 0s10.32 4.2 10.93 9.77c.06.57-.12 1.14-.5 1.57-.38.42-.92.67-1.49.67ZM23 15c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1Zm-4 9H5c-2.21 0-4-1.79-4-4 0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2 0 2.21-1.79 4-4 4Z"/></svg>
  