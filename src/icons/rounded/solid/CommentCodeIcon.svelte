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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.029a12.018 12.018 0 0 0-9.327 3.492A12.022 12.022 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.096.454 12.836.029ZM7.291 12.757l2.535 2.536a.999.999 0 1 1-1.414 1.414l-2.535-2.536c-.565-.565-.876-1.318-.876-2.121s.312-1.556.876-2.121l2.636-2.636a.999.999 0 1 1 1.414 1.414l-2.636 2.636a1 1 0 0 0 0 1.414Zm10.833 1.414-2.536 2.536a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.536-2.536a1 1 0 0 0 0-1.414l-2.636-2.636a.999.999 0 1 1 1.414-1.414l2.636 2.636c.565.565.876 1.318.876 2.121s-.312 1.556-.876 2.121Z"/></svg>
  