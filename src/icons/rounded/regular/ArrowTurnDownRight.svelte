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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.13 12.89 17.72 7.3a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l5.14 5.3H5c-1.65 0-3-1.35-3-3V3c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h16.42l-5.14 5.3c-.38.4-.37 1.03.02 1.41.19.19.44.28.7.28s.52-.1.72-.3l5.4-5.58a2.997 2.997 0 0 0 .01-4.23Z"/></svg>
  