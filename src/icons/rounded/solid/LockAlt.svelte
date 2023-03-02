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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 10a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm11 2A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12zm-9-2a3 3 0 1 0-4 2.816V16a1 1 0 0 0 2 0v-3.184A3 3 0 0 0 15 10z"/></svg>
  