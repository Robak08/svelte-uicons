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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 18.172V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h10a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3v-9h15a1 1 0 0 0 1-1V2.172c1.164.413 2 1.524 2 2.828v13.172A3.004 3.004 0 0 0 18 21c0 1.654 1.346 3 3 3s3-1.346 3-3a3.004 3.004 0 0 0-2-2.828ZM5 2h11v2H2.172A3.004 3.004 0 0 1 5 2ZM2 8V6h14v2H2Zm19 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Z"/></svg>
  