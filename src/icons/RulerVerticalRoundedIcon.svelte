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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-ruler-vertical {customClass}"><path d="M13 0h-2C8.794 0 7 1.794 7 4v16c0 2.206 1.794 4 4 4h2c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4Zm0 22h-2c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v1h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v1c0 1.103-.897 2-2 2Z"/></svg>
  