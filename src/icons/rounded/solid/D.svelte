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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 24H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4c6.065 0 11 4.935 11 11v2c0 6.065-4.935 11-11 11ZM7 2C5.346 2 4 3.346 4 5v14c0 1.654 1.346 3 3 3h4c4.963 0 9-4.038 9-9v-2c0-4.962-4.037-9-9-9H7Z"/></svg>
  