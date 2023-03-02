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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.72 18.31c.38.4.37 1.03-.04 1.41l-3.59 3.41c-.57.57-1.33.86-2.1.86s-1.54-.29-2.13-.88L.31 19.72a.996.996 0 0 1-.04-1.41.987.987 0 0 1 1.41-.03l3.31 3.15V1c0-.55.45-1 1-1s1 .45 1 1v20.43l3.31-3.15a.996.996 0 0 1 1.41.03ZM23 17v3c0 1.65-1.35 3-3 3h-3c-1.65 0-3-1.35-3-3v-3c0-1.65 1.35-3 3-3h3c1.65 0 3 1.35 3 3Zm-2 0c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3Zm2.18-8.12A2.27 2.27 0 0 1 21.22 10h-5.43c-.81 0-1.55-.42-1.96-1.12-.42-.7-.43-1.54-.04-2.26l2.74-4.48c.37-.69 1.14-1.15 1.98-1.15s1.61.46 2.01 1.2l2.69 4.39c.41.76.4 1.6-.02 2.3Zm-1.71-1.3-2.69-4.39c-.09-.17-.2-.19-.28-.19s-.18.03-.25.15l-2.74 4.48c-.04.07 0 .17.03.23.04.06.11.14.24.14h5.43c.13 0 .21-.08.24-.14.04-.06.07-.16 0-.28Z"/></svg>
  