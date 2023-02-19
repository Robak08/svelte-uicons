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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-diagram-lean-canvas {customClass}"><path d="M19 2H5C2.24 2 0 4.24 0 7v10c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5Zm3 5v8h-3V4c1.65 0 3 1.35 3 3Zm-7 8v-4h2v4h-2Zm-8 0v-4h2v4H7ZM17 4v5h-2V4h2Zm-4 0v11h-2V4h2ZM9 4v5H7V4h2ZM5 4v11H2V7c0-1.65 1.35-3 3-3Zm0 16c-1.65 0-3-1.35-3-3h9v3H5Zm14 0h-6v-3h9c0 1.65-1.35 3-3 3Z"/></svg>
  