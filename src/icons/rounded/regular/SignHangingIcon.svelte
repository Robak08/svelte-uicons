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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 4.418V2h2a1 1 0 0 0 0-2H5C2.243 0 0 2.243 0 5v18a1 1 0 0 0 2 0V5c0-1.654 1.346-3 3-3h2v2.418A5.008 5.008 0 0 0 4 9v6c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V9a5.008 5.008 0 0 0-3-4.582ZM9 2h10v2H9V2Zm13 13c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v6Z"/></svg>
  