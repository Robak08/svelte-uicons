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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.029a12.035 12.035 0 0 0-9.327 3.492 12.027 12.027 0 0 0-3.48 9.333C.47 19.208 6.082 24 13.083 24H19c2.757 0 5-2.243 5-5v-6.66C24 5.862 19.097.454 12.836.029Zm3.871 10.797a.999.999 0 0 1-1.414 0L13 8.533V17a1 1 0 1 1-2 0V8.634l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.636-2.636A2.993 2.993 0 0 1 12 6.001h.014a2.99 2.99 0 0 1 2.157.876l2.535 2.536a.999.999 0 0 1 0 1.414Z"/></svg>
  