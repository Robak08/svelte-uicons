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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.789 17.976A15.4 15.4 0 0 0 12 17a15.4 15.4 0 0 0-4.793.976 1 1 0 0 1-1.052-1.518A6.836 6.836 0 0 1 12 13a6.827 6.827 0 0 1 5.842 3.458 1 1 0 0 1-1.053 1.518ZM24 12A12.013 12.013 0 0 0 12 0C-3.9.6-3.893 23.4 12 24a12.013 12.013 0 0 0 12-12Zm-2 0a10.011 10.011 0 0 1-10 10C-1.249 21.5-1.244 2.5 12 2a10.011 10.011 0 0 1 10 10Zm-4.168-.445a1 1 0 0 0-.277-1.387L15.8 9l1.752-1.168a1 1 0 0 0-1.11-1.664l-3 2a1.007 1.007 0 0 0 0 1.664l3 2a1 1 0 0 0 1.387-.277Zm-10.277.277 3-2a1.007 1.007 0 0 0 0-1.664l-3-2a1 1 0 0 0-1.11 1.664L8.2 9l-1.755 1.168a1 1 0 0 0 1.11 1.664Z"/></svg>
  