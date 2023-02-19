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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-text-slash {customClass}"><path d="M4 8v1a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Zm19.707 15.707a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l2.546 2.546A4.98 4.98 0 0 1 7 2h10c2.757 0 5 2.243 5 5v2a1 1 0 0 1-2 0V7c0-1.654-1.346-3-3-3h-4v7.586l10.707 10.707a.999.999 0 0 1 0 1.414ZM5.716 4.302 11 9.586V4H7c-.45 0-.885.112-1.284.302ZM12 16a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Z"/></svg>
  