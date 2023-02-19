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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-distribute-spacing-horizontal {customClass}"><path d="M21 24c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v22c0 .55-.45 1-1 1ZM4 23V1c0-.55-.45-1-1-1S2 .45 2 1v22c0 .55.45 1 1 1s1-.45 1-1Zm13-7V8c0-2.21-1.79-4-4-4h-2C8.79 4 7 5.79 7 8v8c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4ZM13 6c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2Z"/></svg>
  