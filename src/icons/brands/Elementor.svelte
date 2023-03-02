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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.003 0C5.376-.001.001 5.37 0 11.997-.001 18.624 5.37 23.999 11.997 24c6.627.001 12.002-5.37 12.003-11.997V12C24 5.374 18.629.001 12.003 0zM9.001 16.999h-2v-10h2v10zm8.001 0h-6v-2h6v2zm0-4.001h-6v-2h6v2zm0-3.999h-6v-2h6v2z"/></svg>
  