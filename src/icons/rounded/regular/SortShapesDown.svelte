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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 10h3c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3Zm-1-6c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1V4Zm-4.28 14.31c.38.4.37 1.03-.03 1.41L8.1 23.13c-.55.55-1.3.86-2.1.86s-1.55-.31-2.12-.88L.31 19.72a.987.987 0 0 1-.03-1.41.987.987 0 0 1 1.41-.03L5 21.43V1c0-.55.45-1 1-1s1 .45 1 1v20.43l3.31-3.15c.4-.38 1.03-.36 1.41.03Zm11.47 1.27-2.69-4.39c-.4-.74-1.17-1.2-2.01-1.2s-1.61.46-1.98 1.15l-2.74 4.48c-.39.71-.37 1.56.05 2.26S14.97 23 15.78 23h5.43c.81 0 1.55-.42 1.96-1.12s.43-1.54.02-2.3Zm-1.74 1.28c-.04.06-.11.14-.24.14h-5.43c-.13 0-.21-.08-.24-.14-.04-.06-.07-.16-.03-.23l2.74-4.48c.07-.12.17-.15.25-.15s.18.03.28.19l2.69 4.39a.3.3 0 0 1 0 .28Z"/></svg>
  