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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 0H9a5.006 5.006 0 0 0-5 5v11h16V5a5.006 5.006 0 0 0-5-5ZM4 19a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-1H4Zm8 1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg>
  