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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 14h-3v-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2Zm-5 4H8v-2h3v2Zm0-4H8v-2h3v2Zm5 4h-3v-2h3v2Zm3.949-12.465-3.484-3.484A6.955 6.955 0 0 0 11.515 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-8.515c0-1.87-.729-3.628-2.051-4.95Zm-1.414 1.414c.318.318.587.671.806 1.051H15a1 1 0 0 1-1-1V2.659c.38.218.733.488 1.051.806l3.484 3.484ZM20 19c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4.515c.163 0 .325.008.485.023V7c0 1.654 1.346 3 3 3h4.977c.015.16.023.322.023.485V19Z"/></svg>
  