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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 7.077A7.009 7.009 0 0 1 8 0h5a7.01 7.01 0 0 1 6.713 5.029A4.993 4.993 0 0 0 15 10v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-3.83A3.114 3.114 0 0 1 19.839 7 3 3 0 0 1 23 10v3.075A7.48 7.48 0 0 1 19.752 19H2.827l-.377-.539A7.992 7.992 0 0 1 1 13.869v-3.425A3.959 3.959 0 0 0 3 11h9a1 1 0 0 0 1-1 1 1 0 0 0-1-1H3a1.983 1.983 0 0 1-2-1.923ZM3 21v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1Z"/></svg>
  