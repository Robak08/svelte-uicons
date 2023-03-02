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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 9V7H8v2a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5zm-1 8h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zm.5-12h-7a2.5 2.5 0 0 1 0-5h7a2.5 2.5 0 0 1 0 5z"/></svg>
  