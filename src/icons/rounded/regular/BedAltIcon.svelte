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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.243 2 0 4.243 0 7v14a1 1 0 1 0 2 0v-2h20v2a1 1 0 1 0 2 0V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v6h-2c0-2.206-1.794-4-4-4h-1a3.994 3.994 0 0 0-3 1.357A3.99 3.99 0 0 0 9 9H8c-2.206 0-4 1.794-4 4H2V7c0-1.654 1.346-3 3-3Zm8 9c0-1.103.897-2 2-2h1c1.103 0 2 .897 2 2h-5Zm-7 0c0-1.103.897-2 2-2h1c1.103 0 2 .897 2 2H6Zm-4 4v-2h20v2H2Z"/></svg>
  