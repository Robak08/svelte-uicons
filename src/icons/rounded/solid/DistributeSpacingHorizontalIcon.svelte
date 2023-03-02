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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 24c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v22c0 .55-.45 1-1 1ZM4 23V1c0-.55-.45-1-1-1S2 .45 2 1v22c0 .55.45 1 1 1s1-.45 1-1Zm13-6.5v-9C17 5.57 15.43 4 13.5 4h-3C8.57 4 7 5.57 7 7.5v9c0 1.93 1.57 3.5 3.5 3.5h3c1.93 0 3.5-1.57 3.5-3.5Z"/></svg>
  