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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 24h-4a5.006 5.006 0 0 1-5-5v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1-5 5zm3-12v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2zm-2-5V1.414A1.412 1.412 0 0 0 12.956.151l-2.622 1.311A2.412 2.412 0 0 0 9 3.62V7z"/></svg>
  