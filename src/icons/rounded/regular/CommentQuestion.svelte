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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.904 16a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 11.904 16Zm1-2c0-.561.408-1.225.928-1.512a4.021 4.021 0 0 0 2.009-4.223c-.283-1.613-1.607-2.938-3.221-3.221a4.034 4.034 0 0 0-3.289.874 3.995 3.995 0 0 0-1.428 3.063 1 1 0 1 0 2 0 2.002 2.002 0 0 1 2.371-1.967c.787.138 1.458.81 1.596 1.596a1.995 1.995 0 0 1-1.004 2.125c-1.156.637-1.963 1.979-1.963 3.264a1 1 0 1 0 2 0ZM24 19v-6.66C24 5.861 19.096.454 12.836.028a12.047 12.047 0 0 0-9.327 3.493A12.024 12.024 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5ZM12.701 2.024C17.916 2.378 22 6.909 22 12.339v6.66c0 1.654-1.346 3-3 3h-5.917c-6.035 0-10.686-3.904-11.059-9.284a10.02 10.02 0 0 1 2.899-7.781A10.016 10.016 0 0 1 12.7 2.023Z"/></svg>
  