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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 11c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3v1.665a.88.88 0 0 0 1.227.809l1.53-.656A3.004 3.004 0 0 1 12 19Zm7.949-13.464L16.465 2.05A6.958 6.958 0 0 0 11.515 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-8.515a6.954 6.954 0 0 0-2.051-4.95Zm-1.414 1.415c.318.317.587.67.805 1.05h-4.341c-.552 0-1-.449-1-1V2.659c.38.218.733.487 1.051.805l3.484 3.486ZM20 19.001c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4.515c.163 0 .325.008.485.023V7c0 1.654 1.346 3 3 3h4.977c.015.16.023.322.023.485V19Z"/></svg>
  