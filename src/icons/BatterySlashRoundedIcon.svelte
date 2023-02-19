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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-battery-slash {customClass}"><path d="M21.784 16H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1.101A5.01 5.01 0 0 0 17 4H5.414L1.707.293A1 1 0 1 0 .292 1.707l22.001 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.582-3.582A5.949 5.949 0 0 0 21.784 16ZM7.414 6H17c1.654 0 3 1.346 3 3v5.5c0 1.034-.512 2.111-1.291 2.796L7.414 6ZM14 19a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V9c0-.879.231-1.744.669-2.5A.999.999 0 1 1 2.4 7.501a3.003 3.003 0 0 0-.401 1.5v6c0 1.654 1.346 3 3 3H13a1 1 0 0 1 1 1Z"/></svg>
  