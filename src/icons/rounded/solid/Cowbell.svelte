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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.94 14.3-1.28-6.18a4.977 4.977 0 0 0-4.84-4.11c.11-.32.19-.65.19-1.01 0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3 0 .35.07.69.19 1.01a4.986 4.986 0 0 0-4.84 4.11L1.08 14.3c-.21 1.17.11 2.36.87 3.27.76.91 1.88 1.43 3.07 1.43h14c1.19 0 2.31-.52 3.07-1.43s1.08-2.1.87-3.27ZM10 2h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1ZM8.14 21h7.72c-.45 1.72-2 3-3.86 3s-3.41-1.28-3.86-3Z"/></svg>
  