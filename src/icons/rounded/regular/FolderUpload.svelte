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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 3h-6.528c-.154 0-.31-.036-.447-.105L8.872 1.319a3.012 3.012 0 0 0-1.344-.318H5A5.004 5.004 0 0 0 0 6v12c0 2.757 2.243 5 5 5h3a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3V9h20v9c0 1.654-1.346 3-3 3h-3a1 1 0 1 0 0 2h3c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5ZM2 6c0-1.654 1.346-3 3-3h2.528c.154 0 .308.036.447.106l3.156 1.577c.415.207.878.316 1.341.316H19c1.302 0 2.402.839 2.816 2H2v-1Zm12.293 9.896L13 14.603V22a1 1 0 1 1-2 0v-7.397l-1.293 1.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l1.613-1.613c1.118-1.119 3.069-1.119 4.188 0l1.613 1.613a.999.999 0 1 1-1.414 1.414Z"/></svg>
  