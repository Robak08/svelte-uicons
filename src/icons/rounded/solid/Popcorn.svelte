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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.973 6.533a4.011 4.011 0 0 0-4.921-3.414A3.479 3.479 0 0 0 14.66 2a3.517 3.517 0 0 0-5.646-.96 3.456 3.456 0 0 0-3.7 2.016 4.007 4.007 0 0 0-3.287 3.477c-2.162 1.03-3.164 5.282.065 5.467H5a4 4 0 0 1 3.293 1.732 4.89 4.89 0 0 1 7.414 0A4 4 0 0 1 19 12h2.908c3.229-.185 2.227-4.436.065-5.467ZM9 7a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3 1 1 0 0 1 0 2Zm8 3a1 1 0 0 1-1-1 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-2.1 6.872L14.105 24H9.9l-.8-7.128a2.9 2.9 0 0 1 5.8 0ZM7 16l.884 8a4.517 4.517 0 0 1-4.43-3.632L2.18 14H5a2 2 0 0 1 2 2Zm12-2h2.82l-1.274 6.369A4.517 4.517 0 0 1 16.117 24L17 16a2 2 0 0 1 2-2Z"/></svg>
  