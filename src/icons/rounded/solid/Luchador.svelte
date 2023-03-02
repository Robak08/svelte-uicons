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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 13v1H7a1 1 0 0 1-1-1v-1.171A3 3 0 0 0 7 12h1a1 1 0 0 1 1 1Zm7-1a1 1 0 0 0-1 1v1h2a1 1 0 0 0 1-1v-1.171A3.009 3.009 0 0 1 17 12Zm8 0v7a5.006 5.006 0 0 1-5 5h-.046v-.007c-2.341 0-3.1-1.593-3.627-2.556l-.371-.681A3.369 3.369 0 0 0 12 19l-.022.033-.022-.033A3.368 3.368 0 0 0 9 20.756l-.371.681C8.1 22.4 7.34 23.993 5 23.993V24a5.006 5.006 0 0 1-5-5v-6.635A12.248 12.248 0 0 1 11.775 0 12 12 0 0 1 24 12Zm-13 1a3 3 0 0 0-3-3H7a1 1 0 0 1-1-1 1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h2a2 2 0 0 0 2-2Zm9-4a1 1 0 0 0-2 0 1 1 0 0 1-1 1h-1a3 3 0 0 0-3 3v1a2 2 0 0 0 2 2h2a3 3 0 0 0 3-3Z"/></svg>
  