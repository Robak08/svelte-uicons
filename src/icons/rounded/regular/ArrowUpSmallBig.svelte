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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 1h-2c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h2c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3Zm1 5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2Zm-1 7h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3h4c1.65 0 3-1.35 3-3v-4c0-1.65-1.35-3-3-3Zm1 7c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4ZM11.69 4.28A.996.996 0 0 1 11.01 6c-.25 0-.5-.09-.69-.28L7.01 2.57V23c0 .55-.45 1-1 1s-1-.45-1-1V2.57L1.69 5.72c-.4.38-1.03.37-1.41-.04a.987.987 0 0 1 .04-1.41L3.9.86C5.05-.29 6.95-.29 8.12.88l3.57 3.4Z"/></svg>
  