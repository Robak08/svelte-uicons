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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 7c.55 0 1-.45 1-1 0-2.76-2.24-5-5-5H5C2.24 1 0 3.24 0 6v7c0 2.76 2.24 5 5 5h5v2H7c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-8c0-3.31 2.69-6 6-6h3Zm-1 2h-2c-2.21 0-4 1.79-4 4v7c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4v-7c0-2.21-1.79-4-4-4Z"/></svg>
  