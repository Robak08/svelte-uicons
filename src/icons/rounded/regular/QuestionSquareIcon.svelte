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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 16a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 16Zm1-2c0-.561.408-1.225.928-1.512a4.021 4.021 0 0 0 2.009-4.222c-.283-1.614-1.608-2.938-3.221-3.22a4.025 4.025 0 0 0-3.287.873A3.993 3.993 0 0 0 8 8.983a1 1 0 0 0 2 0 2 2 0 0 1 2.371-1.968 2.022 2.022 0 0 1 1.596 1.596 1.996 1.996 0 0 1-1.004 2.125C11.807 11.373 11 12.715 11 14a1 1 0 1 0 2 0Zm11 5V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5ZM19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14Z"/></svg>
  