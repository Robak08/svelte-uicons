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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-ramp-loading {customClass}"><path d="M18.997 24H5.003a2.982 2.982 0 0 1-2.553-1.423 2.981 2.981 0 0 1-.131-2.919l2.724-5.447A3.978 3.978 0 0 1 8.621 12h6.758c1.525 0 2.896.847 3.578 2.211l2.724 5.447a2.981 2.981 0 0 1-.131 2.919A2.982 2.982 0 0 1 18.997 24ZM8.621 14c-.763 0-1.448.423-1.789 1.105l-2.724 5.447a.981.981 0 0 0 .044.973.984.984 0 0 0 .851.474h13.994a.986.986 0 0 0 .851-.474.981.981 0 0 0 .044-.973l-2.724-5.447A1.988 1.988 0 0 0 15.379 14H8.621ZM22 12V5c0-2.757-2.243-5-5-5H7C4.243 0 2 2.243 2 5v7a1 1 0 1 0 2 0V5c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v7a1 1 0 1 0 2 0Z"/></svg>
  