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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 11c0-1.57-.75-3.04-2-3.98 0-1.9-1.33-3.51-3.1-3.92-.41-1.77-2-3.1-3.9-3.1a4 4 0 0 0-3 1.36A4 4 0 0 0 9 0a4.01 4.01 0 0 0-3.9 3.1C3.33 3.51 2 5.12 2 7.02.75 7.96 0 9.43 0 11c0 .89.24 1.74.69 2.5C.24 14.26 0 15.11 0 16c0 1.69.86 3.24 2.27 4.17A5.459 5.459 0 0 0 7.5 24c1.86 0 3.5-.93 4.5-2.34 1 1.41 2.64 2.34 4.5 2.34 2.42 0 4.51-1.56 5.23-3.83A4.978 4.978 0 0 0 24 16c0-.89-.24-1.74-.69-2.5.45-.76.69-1.61.69-2.5Zm-13 7.5c0 1.93-1.57 3.5-3.5 3.5-1.63 0-3.03-1.12-3.4-2.71-.06-.28-.25-.52-.5-.66C2.62 18.1 2 17.09 2 16c0-.67.23-1.32.68-1.87.3-.37.3-.89 0-1.26C2.24 12.32 2 11.67 2 11c0-1.07.59-2.07 1.54-2.6.37-.21.57-.63.49-1.05-.02-.11-.04-.23-.04-.35 0-1.1.9-2 2-2 .55 0 1-.45 1-1 0-1.1.9-2 2-2s2 .9 2 2v14.5Zm10.32-4.37c.44.55.68 1.2.68 1.87 0 1.1-.61 2.1-1.6 2.63-.25.14-.44.38-.5.66A3.476 3.476 0 0 1 16.5 22c-1.93 0-3.5-1.57-3.5-3.5V4c0-1.1.9-2 2-2s2 .9 2 2c0 .55.45 1 1 1 1.1 0 2 .9 2 2 0 .12-.02.24-.04.35-.08.42.12.84.49 1.05.95.54 1.54 1.53 1.54 2.6 0 .68-.23 1.32-.68 1.87-.3.37-.3.89 0 1.26Z"/></svg>
  