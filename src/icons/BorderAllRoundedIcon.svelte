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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-border-all {customClass}"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm3 5v6h-9V2h6c1.65 0 3 1.35 3 3ZM5 2h6v9H2V5c0-1.65 1.35-3 3-3ZM2 19v-6h9v9H5c-1.65 0-3-1.35-3-3Zm17 3h-6v-9h9v6c0 1.65-1.35 3-3 3Z"/></svg>
  