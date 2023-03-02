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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.681 19.658a2.981 2.981 0 0 1-.131 2.919A2.982 2.982 0 0 1 18.997 24H5.003a2.982 2.982 0 0 1-2.553-1.423 2.981 2.981 0 0 1-.131-2.919l2.724-5.447A3.978 3.978 0 0 1 8.621 12h6.758c1.525 0 2.896.847 3.578 2.211l2.724 5.447ZM3.256 13.316A5.967 5.967 0 0 1 8.623 10h6.758a5.966 5.966 0 0 1 5.367 3.317L22 15.82V5c0-2.757-2.243-5-5-5H7C4.243 0 2 2.243 2 5v10.828l1.256-2.512Z"/></svg>
  