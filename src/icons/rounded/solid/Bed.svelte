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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 9.5A2.5 2.5 0 1 1 6.5 7 2.5 2.5 0 0 1 9 9.5ZM24 12v-2a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2ZM2 14V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h20v2a1 1 0 0 0 2 0v-7Z"/></svg>
  