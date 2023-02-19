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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cowbell {customClass}"><path d="m22.94 15.3-1.28-7.18a4.977 4.977 0 0 0-4.84-4.11c.11-.32.19-.65.19-1.01 0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3 0 .35.07.69.19 1.01a4.986 4.986 0 0 0-4.84 4.11L1.08 15.3c-.21 1.17.11 2.36.87 3.27.76.91 1.88 1.43 3.07 1.43h3c0 2.21 1.79 4 4 4s4-1.79 4-4h3c1.19 0 2.31-.52 3.07-1.43s1.08-2.1.87-3.27ZM10 2h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1Zm2 20c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2Zm8.53-4.72c-.38.46-.94.72-1.53.72H5c-.59 0-1.15-.26-1.53-.72s-.54-1.05-.44-1.64l1.28-7.18c.26-1.43 1.5-2.47 2.95-2.47h9.47c1.46 0 2.7 1.04 2.95 2.47l1.28 7.18c.1.58-.05 1.18-.43 1.63Z"/></svg>
  