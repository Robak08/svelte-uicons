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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-7.414-7.414 4.345-4.478a4.928 4.928 0 0 0 1.4-3.451 4.957 4.957 0 0 0-4.951-4.951H6.951c-.973 0-1.909.297-2.712.825L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM15 19.242V23a1.001 1.001 0 0 1-1.6.8l-4-3A.998.998 0 0 1 9 20v-3.844l-5.638-5.755a4.928 4.928 0 0 1-1.4-3.451c0-.235.028-.462.06-.687L15 19.241Z"/></svg>
  