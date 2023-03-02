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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 11v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3h8Zm8 1c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-6-2a3.004 3.004 0 0 0-2-2.828V6a1 1 0 1 0-2 0v1h-4V6a1 1 0 1 0-2 0v1.172A3.004 3.004 0 0 0 6 10v4c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-4Z"/></svg>
  