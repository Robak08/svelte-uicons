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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 18.184V5a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h10a1 1 0 1 0 0-2H5a3 3 0 0 1-3-3v-9h15a1 1 0 0 0 1-1V6H2V4h16V2.171c1.164.413 2 1.525 2 2.829v13.184a2.993 2.993 0 0 0-1.941 3.416 3.012 3.012 0 0 0 2.376 2.348A3.004 3.004 0 0 0 24 21a2.996 2.996 0 0 0-2-2.816Z"/></svg>
  