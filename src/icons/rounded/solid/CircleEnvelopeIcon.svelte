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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.5 8.07a1.95 1.95 0 0 1 .498-.071l5.993-.005h.002c.18 0 .353.032.522.077l-2.519 2.519c-.527.527-1.448.527-1.976 0L8.499 8.069Zm5.91 3.935c-.641.642-1.494.995-2.401.995s-1.761-.354-2.402-.995L7.079 9.476a1.968 1.968 0 0 0-.078.523v2.999c0 .535.208 1.037.586 1.415s.88.585 1.414.585l5.993-.003a2.002 2.002 0 0 0 1.999-2v-3c0-.172-.029-.339-.071-.501l-2.512 2.512ZM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-5.007-2.006a3.977 3.977 0 0 0-1.173-2.83 3.979 3.979 0 0 0-2.827-1.17h-.004l-5.993.005a4.005 4.005 0 0 0-3.996 4v2.999c0 1.069.416 2.074 1.172 2.829S7.932 16.998 9 16.998h.003l5.993-.003a4.005 4.005 0 0 0 3.997-4v-3Z"/></svg>
  