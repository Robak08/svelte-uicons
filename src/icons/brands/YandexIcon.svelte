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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.096 24v-2.417c0-3.281-.381-4.904-1.697-7.735L1.993 0h4.432l5.436 11.845c1.593 3.453 2.285 5.249 2.285 9.22V24h-4.05z"/><path d="M12.693 11.603 17.748 0 22.007 0 16.882 11.603z"/></svg>
  