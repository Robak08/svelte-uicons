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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 8a8 8 0 1 1 8 8 8.009 8.009 0 0 1-8-8zm17.646 5.383a1 1 0 0 0-1.39.26A10 10 0 1 1 5.285 1.637 1 1 0 0 0 3.743.363 11.994 11.994 0 0 0 12 19.949V22H8a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2.061a11.992 11.992 0 0 0 8.907-5.166 1 1 0 0 0-.261-1.39z"/></svg>
  