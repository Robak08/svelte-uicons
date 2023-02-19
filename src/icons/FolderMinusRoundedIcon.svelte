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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-folder-minus {customClass}"><path d="M16 15a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1Zm8-7v10c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V6c0-2.757 2.243-5 5-5h2.528c.463 0 .927.109 1.341.316l3.156 1.578c.138.069.292.105.446.105h6.528c2.757 0 5 2.243 5 5ZM2 6v1h19.828A3.004 3.004 0 0 0 19 5h-6.528c-.463 0-.927-.109-1.341-.316L7.975 3.106a1.001 1.001 0 0 0-.446-.105H5.001c-1.654 0-3 1.346-3 3Zm20 12V9H2v9c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3Z"/></svg>
  