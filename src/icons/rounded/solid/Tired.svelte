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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm1.445 8.168 3-2a1 1 0 0 1 1.11 1.664L15.8 9l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.007 1.007 0 0 1 .003-1.664Zm-7-.336a1 1 0 0 1 1.11-1.664l3 2a1.007 1.007 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.11-1.664L8.2 9Zm10.344 10.144A15.4 15.4 0 0 0 12 17a15.4 15.4 0 0 0-4.793.976 1 1 0 0 1-1.052-1.518A6.836 6.836 0 0 1 12 13a6.827 6.827 0 0 1 5.842 3.458 1 1 0 0 1-1.053 1.518Z"/></svg>
  