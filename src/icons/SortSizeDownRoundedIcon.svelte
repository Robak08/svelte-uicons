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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-sort-size-down {customClass}"><path d="M21 1h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3h4c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3Zm1 7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4Zm-1 7h-2c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h2c1.65 0 3-1.35 3-3v-2c0-1.65-1.35-3-3-3Zm1 5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2Zm-10.28-1.69c.38.4.37 1.03-.03 1.41L8.1 23.13c-.55.55-1.3.86-2.1.86s-1.55-.31-2.12-.88L.31 19.72a.987.987 0 0 1-.03-1.41.987.987 0 0 1 1.41-.03L5 21.43V1c0-.55.45-1 1-1s1 .45 1 1v20.43l3.31-3.15c.4-.38 1.03-.36 1.41.03Z"/></svg>
  