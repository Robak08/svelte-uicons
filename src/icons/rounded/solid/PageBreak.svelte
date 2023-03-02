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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 14a1 1 0 0 1 1-1h4v-2.515c0-.163-.013-.324-.024-.485H15c-1.654 0-3-1.346-3-3V.024C11.839.013 11.678 0 11.515 0H7C4.243 0 2 2.243 2 5v8h4a1 1 0 1 1 0 2H2v4c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-4h-4a1 1 0 0 1-1-1Zm-3 1h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2Zm0-8V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15c-.552 0-1-.449-1-1Z"/></svg>
  