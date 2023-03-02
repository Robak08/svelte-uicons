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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 4H8c-1.1 0-2-.9-2-2s.9-2 2-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Zm10 5h-4c-2.21 0-4 1.79-4 4v7c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-7c0-2.21-1.79-4-4-4Zm0 10h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1Zm0-4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1Zm-4-8h2c0-2.42-1.73-4.42-4.01-4.88C13.92 4.27 12.17 6 10 6H8C5.83 6 4.06 4.26 4.01 2.1A5.01 5.01 0 0 0 0 7v12c0 2.76 2.24 5 5 5h6.53A5.97 5.97 0 0 1 10 20v-7c0-3.31 2.69-6 6-6Z"/></svg>
  