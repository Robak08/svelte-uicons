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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.029a12.016 12.016 0 0 0-9.327 3.492A12.022 12.022 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5v-6.66C24 5.862 19.096.454 12.836.029ZM6.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 7Zm13.207 4.207L16.414 14.5c-.779.78-2.049.78-2.828 0L11 11.914l-4.293 4.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L9.586 10.5c.756-.756 2.072-.756 2.828 0L15 13.086l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"/></svg>
  