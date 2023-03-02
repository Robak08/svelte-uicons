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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15c-.552 0-1-.449-1-1Zm-1 12h3v-2h-3v2Zm-5-4h3v-2H8v2Zm0 4h3v-2H8v2Zm13.976-9H15c-1.654 0-3-1.346-3-3V.024C11.839.013 11.678 0 11.515 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-8.515c0-.163-.013-.324-.024-.485ZM18 19c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h3c1.103 0 2 .897 2 2v2h3c1.103 0 2 .897 2 2v2Z"/></svg>
  