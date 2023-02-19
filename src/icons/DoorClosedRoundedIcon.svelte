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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-door-closed {customClass}"><path d="M23 22h-3V5c0-2.757-2.243-5-5-5H9C6.243 0 4 2.243 4 5v17H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2ZM6 5c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3v17H6V5Zm10 7.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 16 12.5Z"/></svg>
  