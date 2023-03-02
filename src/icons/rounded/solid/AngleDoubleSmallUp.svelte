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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 18a1 1 0 0 1-.705-1.71l6.001-5.964a1 1 0 0 1 1.41 0l5.999 5.964a.999.999 0 1 1-1.41 1.418l-5.294-5.263-5.296 5.264A.997.997 0 0 1 6 18Zm12-6.262a.992.992 0 0 1-.702-.289l-3.93-3.88c-.738-.737-2.003-.733-2.731-.004l-3.935 3.884a.999.999 0 1 1-1.404-1.423l3.93-3.88C9.964 5.408 10.951 5 12 5s2.036.409 2.777 1.151l3.925 3.875A1 1 0 0 1 18 11.737Z"/></svg>
  