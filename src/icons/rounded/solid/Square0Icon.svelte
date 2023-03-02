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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 10v4c0 1.103-.897 2-2 2s-2-.897-2-2v-4c0-1.103.897-2 2-2s2 .897 2 2Zm10-5v14c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-8 5c0-2.206-1.794-4-4-4s-4 1.794-4 4v4c0 2.206 1.794 4 4 4s4-1.794 4-4v-4Z"/></svg>
  