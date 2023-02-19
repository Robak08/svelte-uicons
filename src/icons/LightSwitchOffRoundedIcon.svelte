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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-light-switch-off {customClass}"><path d="M17 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v14ZM14 4h-4a3.003 3.003 0 0 0-2.999 2.948L7 18c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2l-.001-11.052A3.003 3.003 0 0 0 14 4ZM9 8h6v3H9V8Zm0 10v-5h6.001v5H9Z"/></svg>
  