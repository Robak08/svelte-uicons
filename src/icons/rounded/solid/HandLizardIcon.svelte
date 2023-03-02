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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.5 1H2.07C1.06 1 .18 1.72.03 2.67A2 2 0 0 0 .48 4.3c.38.45.94.71 1.52.71h5.73c1.68 0 3.12 1.18 3.27 2.68.09.89-.22 1.74-.83 2.38S8.71 11 7.84 11H5.59c-1.26 0-2.36.9-2.56 2.09-.12.73.09 1.47.56 2.03s1.17.88 1.9.88h6.5c1.1 0 2 .9 2 2v1c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4v-5.27c0-1.97-.58-3.91-1.68-5.55l-1.82-2.73a9.97 9.97 0 0 0-8-4.45"/></svg>
  