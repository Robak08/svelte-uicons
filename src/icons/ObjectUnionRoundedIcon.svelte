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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-object-union {customClass}"><path d="M19 24h-6c-2.76 0-5-2.24-5-5v-3H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5v3h3c2.76 0 5 2.24 5 5v6c0 2.76-2.24 5-5 5ZM5 2C3.35 2 2 3.35 2 5v6c0 1.65 1.35 3 3 3h4c.55 0 1 .45 1 1v4c0 1.65 1.35 3 3 3h6c1.65 0 3-1.35 3-3v-6c0-1.65-1.35-3-3-3h-4c-.55 0-1-.45-1-1V5c0-1.65-1.35-3-3-3H5Z"/></svg>
  