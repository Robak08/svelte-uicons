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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.5 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13.5 6.5ZM24 9.724V19c0 2.757-2.243 5-5 5h-3a1 1 0 0 1-1-1V13c0-.552-.449-1-1-1h-4c-.551 0-1 .448-1 1v10a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V9.724C0 8.06.824 6.51 2.203 5.578L9.204.855a4.98 4.98 0 0 1 5.593 0L20 4.366V2a1 1 0 1 1 2 0v3.724c1.257.943 2 2.42 2 4ZM22 18v-2h-5v2h5ZM7 16H2v2h5v-2Zm0 6v-2H2.172A3.004 3.004 0 0 0 5 22h2Zm.172-10H2v2h5v-1c0-.351.061-.687.172-1ZM22 10v-.276c0-.999-.494-1.929-1.322-2.487l-7-4.723a2.983 2.983 0 0 0-3.356 0l-7 4.722A2.996 2.996 0 0 0 2 9.723v.276h20Zm-5.172 2c.111.313.172.649.172 1v1h5v-2h-5.172Zm5 8H17v2h2a3.004 3.004 0 0 0 2.828-2Z"/></svg>
  