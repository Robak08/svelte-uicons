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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.72 18.31c.38.4.37 1.03-.04 1.41l-3.59 3.41c-.57.57-1.33.86-2.1.86s-1.54-.29-2.13-.88L.31 19.72a.996.996 0 0 1-.04-1.41.987.987 0 0 1 1.41-.03l3.31 3.15V1c0-.55.45-1 1-1s1 .45 1 1v20.43l3.31-3.15a.996.996 0 0 1 1.41.03ZM20 14h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3h3c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3Zm3.2-7.42-2.69-4.39c-.4-.74-1.17-1.2-2.01-1.2s-1.61.46-1.98 1.15l-2.74 4.48c-.39.71-.37 1.56.04 2.26.42.7 1.15 1.12 1.96 1.12h5.43c.81 0 1.55-.42 1.96-1.12.42-.7.43-1.54.02-2.3Z"/></svg>
  