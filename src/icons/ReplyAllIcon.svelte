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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-reply-all {customClass}"><path d="M19 8H8.554l6.223-6.224A.999.999 0 1 0 13.363.362L6.172 7.554a2.001 2.001 0 0 0 0 2.828l7.191 7.19a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.618 10H19c1.654 0 3 1.346 3 3v10a1 1 0 1 0 2 0V13c0-2.757-2.243-5-5-5Z"/><path d="M2.586 10.312a2.003 2.003 0 0 1 0-2.829l5.776-5.776A.999.999 0 1 0 6.948.293L1.172 6.069a4.004 4.004 0 0 0 0 5.657l5.776 5.776a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-5.776-5.776Z"/></svg>
  