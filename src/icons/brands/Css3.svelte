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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.972 14.935 7.274 18.316 11.994 19.59 11.998 19.589 11.998 19.589 16.725 18.313 17.217 12.816 2.528 12.816 2.149 8.578 17.584 8.578 17.97 4.238 1.771 4.238 1.385 0 22.615 0 20.686 21.59 12.013 23.994 12.013 23.995 11.993 24 3.312 21.59 2.718 14.935z"/></svg>
  