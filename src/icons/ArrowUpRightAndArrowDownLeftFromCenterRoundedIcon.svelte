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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-up-right-and-arrow-down-left-from-center {customClass}"><path d="M9.707 14.293a.999.999 0 0 1 0 1.414L3.414 22H8a1 1 0 1 1 0 2H3c-1.654 0-3-1.346-3-3v-5a1 1 0 1 1 2 0v4.586l6.293-6.293a.999.999 0 0 1 1.414 0ZM21 0h-5a1 1 0 1 0 0 2h4.586l-6.293 6.293a.999.999 0 1 0 1.414 1.414L22 3.414V8a1 1 0 1 0 2 0V3c0-1.654-1.346-3-3-3Z"/></svg>
  