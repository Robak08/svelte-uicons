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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.279 6.693a1 1 0 0 1 .027-1.414L9.893.865c1.105-1.106 3.095-1.12 4.229.014l4.572 4.4a1 1 0 0 1-1.387 1.442L13 2.575V16a1 1 0 0 1-2 0V2.575L6.693 6.721a1 1 0 0 1-1.414-.027ZM20.75 8c-.472 0-.742.227-.75.234-1.174 1.032-3.051.919-4.21-.197l-.79-.76v8.724c0 1.654-1.346 3-3 3s-3-1.345-3-3V7.276l-.79.76C7.05 9.152 5.174 9.265 4 8.233c-.008-.007-.278-.234-.75-.234-.69 0-1.25.56-1.25 1.25v9.75a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9.25C22 8.56 21.44 8 20.75 8Z"/></svg>
  