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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.029C9.367-.206 5.961 1.065 3.509 3.521S-.211 9.378.03 12.854C.47 19.208 6.082 24 13.083 24H19c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.097.454 12.836.029Zm3.871 14.56-2.535 2.535a2.992 2.992 0 0 1-2.122.877H12a2.982 2.982 0 0 1-2.071-.877l-2.636-2.636a.999.999 0 1 1 1.414-1.414L11 15.367V7a1 1 0 0 1 2 0v8.467l2.293-2.293a.999.999 0 1 1 1.414 1.414Z"/></svg>
  