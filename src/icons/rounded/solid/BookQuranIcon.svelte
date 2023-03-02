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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 21a3 3 0 0 1-3 3H7a5 5 0 0 1-5-5v-1h17a3 3 0 0 1 3 3Zm0-16.027v12.052a4.955 4.955 0 0 0-2.395-.964A3 3 0 0 0 19 16H2V5a5 5 0 0 1 5-5h10.033A4.97 4.97 0 0 1 22 4.973Zm-9.614 7.297C11.044 11.439 10 10.001 10 8.001s1.044-3.438 2.386-4.269c.307-.19.183-.665-.177-.704a4.458 4.458 0 0 0-.903-.007C8.819 3.258 6.861 5.507 7 8.001c-.139 2.494 1.82 4.743 4.306 4.98.309.029.61.026.903-.007.359-.04.484-.514.177-.704Zm4.64-5.022A.248.248 0 0 0 16.778 7h-1.596l-.449-1.718a.267.267 0 0 0-.518 0L13.765 7h-1.607a.248.248 0 0 0-.121.464l1.289.717-.499 1.56a.261.261 0 0 0 .409.286l1.238-.957 1.237.956a.264.264 0 0 0 .411-.291l-.504-1.531 1.283-.742a.247.247 0 0 0 .124-.214Z"/></svg>
  