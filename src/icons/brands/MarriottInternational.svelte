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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.489 20.407H24L16.452 2.424 12.663 4.26l2.636 6.261-1.224 2.911L9.352 2.134l-3.829 1.75 3.06 7.249c-1.899 4.558-4.221 5.806-4.449 5.892a4.58 4.58 0 0 1-2.283.314L0 21.309a4.051 4.051 0 0 0 2.032.557c.926 0 1.773-.322 2.479-.855l-.008.016s1.75-.887 3.625-5.743c0-.008 1.098-2.652 1.098-2.652l3.295 7.783h4.503l-2.322-5.476 1.232-2.911 3.555 8.379z"/></svg>
  