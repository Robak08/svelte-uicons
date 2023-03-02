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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.4 13.17a3.905 3.905 0 0 0-2.77-1.15H12v1.63c0 1.04.41 2.04 1.15 2.77l6.84 6.84c.85.85 2.24 1.01 3.17.25 1.07-.88 1.13-2.46.18-3.41l-6.93-6.93ZM.1 6C.57 3.72 2.59 2 5 2h14c2.41 0 4.43 1.72 4.9 4H.1ZM24 8v9c0 .3-.03.59-.08.87l-6.11-6.11a5.926 5.926 0 0 0-4.19-1.73H11c-.55 0-1 .45-1 1v2.63c0 1.57.62 3.08 1.73 4.19l4.16 4.16H5c-2.76 0-5-2.24-5-5V8h24Z"/></svg>
  