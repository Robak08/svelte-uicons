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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 14h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3h3c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3Zm1 6c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3ZM11.69 4.28c.4.38.42 1.01.03 1.41-.2.21-.46.31-.72.31-.25 0-.5-.09-.69-.28L7 2.57V23c0 .55-.45 1-1 1s-1-.45-1-1V2.57L1.69 5.72A.996.996 0 1 1 .31 4.28L3.9.86C5-.24 6.99-.26 8.13.88l3.57 3.4ZM23.2 6.59 20.51 2.2c-.4-.74-1.17-1.2-2.01-1.2s-1.61.46-1.98 1.15l-2.74 4.48c-.39.71-.37 1.56.05 2.26s1.15 1.12 1.96 1.12h5.43c.81 0 1.55-.42 1.96-1.12s.43-1.54.02-2.3Zm-1.74 1.28c-.04.06-.11.14-.24.14h-5.43c-.13 0-.21-.08-.24-.14-.04-.06-.07-.16-.03-.23l2.74-4.48c.07-.12.17-.15.25-.15s.18.03.28.19l2.69 4.39a.3.3 0 0 1 0 .28Z"/></svg>
  