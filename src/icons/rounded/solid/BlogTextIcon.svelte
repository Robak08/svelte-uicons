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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.1 6C.57 3.72 2.59 2 5 2h14c2.41 0 4.43 1.72 4.9 4H.1ZM24 8v9c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V8h24Zm-14 4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v4c0 .55.45 1 1 1s1-.45 1-1v-4h1c.55 0 1-.45 1-1Zm10 4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1Zm0-4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1Z"/></svg>
  