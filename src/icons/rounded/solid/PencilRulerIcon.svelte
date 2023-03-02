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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.515 5.776 3.71 3.71L4.881 22.828A4.001 4.001 0 0 1 2.053 24H0v-2.053c0-1.061.421-2.078 1.172-2.828L14.515 5.776Zm8.63-4.921a2.624 2.624 0 0 0-3.71 0l-3.507 3.507 3.71 3.71 3.507-3.507a2.624 2.624 0 0 0 0-3.71ZM12.266 5.196l-1.5-1.5-2.253 2.253a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.253-2.253-1.256-1.256a3.5 3.5 0 0 0-4.95-.001L1.025 3.146a3.5 3.5 0 0 0 0 4.95l4.171 4.171 7.071-7.071Zm-.533 13.609 4.171 4.171a3.5 3.5 0 0 0 4.95 0l2.121-2.121a3.5 3.5 0 0 0 0-4.95l-1.256-1.256-2.253 2.253a.999.999 0 1 1-1.414-1.414l2.253-2.253-1.5-1.5-7.071 7.071Z"/></svg>
  