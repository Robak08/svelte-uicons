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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24h-.057C6.461 24 2 19.514 2 14c0-1.929.666-4.07 1.874-6.031a2.013 2.013 0 0 1 2.241-.896A2.01 2.01 0 0 1 7.62 8.958c.096 2.74.753 6.014 3.338 6.043 1.081.009 1.937-.747 2.027-1.727.094-1.026-.277-1.83-.746-2.847-.552-1.2-1.24-2.692-1.24-4.901 0-1.707.345-3.412.687-4.345.255-.693.856-1.148 1.57-1.189.739-.04 1.414.367 1.753 1.042.802 1.595 1.938 3.069 3.036 4.495 1.972 2.562 4.011 5.211 3.956 8.487 0 5.464-4.483 9.95-9.994 9.983h-.006Z"/></svg>
  