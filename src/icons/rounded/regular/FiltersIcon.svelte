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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.172 0H7.828A3.833 3.833 0 0 0 4 3.829c0 1.022.398 1.983 1.121 2.707L11 12.414V16a1 1 0 0 0 .4.8l4 3A1.002 1.002 0 0 0 17 19v-6.586l5.879-5.879A3.804 3.804 0 0 0 24 3.828a3.834 3.834 0 0 0-3.828-3.829Zm1.293 5.122-6.172 6.171A1 1 0 0 0 15 12v5l-2-1.5V12a.997.997 0 0 0-.293-.707L6.535 5.122A1.83 1.83 0 0 1 7.828 2h12.344a1.83 1.83 0 0 1 1.293 3.122ZM13 21v2a1.001 1.001 0 0 1-1.6.8l-4-3A.998.998 0 0 1 7 20v-3.586l-5.879-5.878A3.806 3.806 0 0 1 0 7.829c0-1.126.493-2.19 1.353-2.92a1 1 0 1 1 1.295 1.525 1.83 1.83 0 0 0-.112 2.689l6.172 6.171a1 1 0 0 1 .293.707v3.5l2 1.5a1 1 0 1 1 2 0Z"/></svg>
  