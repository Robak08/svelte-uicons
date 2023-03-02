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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.029a12.043 12.043 0 0 0-9.327 3.492 12.027 12.027 0 0 0-3.48 9.333C.47 19.208 6.082 24 13.083 24H19c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.097.454 12.836.029ZM17 14a1 1 0 1 1-2 0v-3.559l-6.294 6.268a1 1 0 1 1-1.412-1.416l6.318-6.292H10a1 1 0 1 1 0-2h4c1.654 0 3 1.346 3 3v4Z"/></svg>
  