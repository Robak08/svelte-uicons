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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 10v4c0 1.103-.897 2-2 2s-2-.897-2-2v-4c0-1.103.897-2 2-2s2 .897 2 2Zm10 2c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-8-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v4c0 2.206 1.794 4 4 4s4-1.794 4-4v-4Z"/></svg>
  