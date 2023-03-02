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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 22H7c-1.654 0-3-1.346-3-3v-6h13a1 1 0 1 0 0-2H4V5c0-1.654 1.346-3 3-3h14a1 1 0 1 0 0-2H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h14a1 1 0 1 0 0-2Z"/></svg>
  