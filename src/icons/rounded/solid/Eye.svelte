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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.19 512.19"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><circle cx="256.095" cy="256.095" r="85.333"/><path d="M496.543 201.034C463.455 147.146 388.191 56.735 256.095 56.735S48.735 147.146 15.647 201.034c-20.862 33.743-20.862 76.379 0 110.123 33.088 53.888 108.352 144.299 240.448 144.299s207.36-90.411 240.448-144.299c20.862-33.744 20.862-76.38 0-110.123zM256.095 384.095c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128c-.071 70.663-57.337 127.929-128 128z"/></svg>
  