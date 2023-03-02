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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 13h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3h4c1.65 0 3-1.35 3-3v-4c0-1.65-1.35-3-3-3Zm1 7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4ZM21 1h-2c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h2c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3Zm1 5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2ZM11.72 18.31c.38.4.37 1.03-.03 1.41L8.1 23.13c-.55.55-1.3.86-2.1.86s-1.55-.31-2.12-.88L.31 19.72c-.4-.38-.42-1.01-.03-1.41s1.01-.42 1.41-.03L5 21.43V1c0-.55.45-1 1-1s1 .45 1 1v20.43l3.31-3.15a.996.996 0 0 1 1.41.03Z"/></svg>
  