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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 2.046V1a1 1 0 1 0-2 0v1.046C5.401 2.553 1 7.272 1 13c0 2.738 1.006 5.246 2.667 7.173C2.821 20.622 2 21.49 2 23a1 1 0 1 0 2 0c0-1 .858-1.194 1.11-1.229.07-.008.138-.023.202-.044C7.167 23.151 9.486 24 11.999 24s4.835-.849 6.69-2.275c.06.02.123.035.188.044.264.036 1.122.23 1.122 1.23a1 1 0 1 0 2 0c0-1.51-.821-2.378-1.667-2.827a10.954 10.954 0 0 0 2.667-7.173c0-5.728-4.401-10.447-10-10.954ZM3 13c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9-9-4.037-9-9Zm21-8.5a1 1 0 1 1-2 0c0-1.212-.977-2.5-2.785-2.5a1 1 0 1 1 0-2C21.899 0 24 1.977 24 4.5Zm-23 1a1 1 0 0 1-1-1C0 1.977 2.102 0 4.785 0a1 1 0 1 1 0 2C2.976 2 2 3.288 2 4.5a1 1 0 0 1-1 1ZM13 7v7a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0Zm.5 11.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001Z"/></svg>
  