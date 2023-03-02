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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 19h2v4a1 1 0 1 1-2 0v-4Zm7.483-13.843c-.315-.067-.591-.371-.703-.772C17.06 1.803 14.683 0 12 0S6.94 1.803 6.22 4.385c-.112.401-.388.705-.703.772a7.002 7.002 0 0 0-5.514 7.058C.115 15.956 3.367 19 7.251 19H11v-3.586l-3.707-3.707a.999.999 0 1 1 1.414-1.414L11 12.586V9a1 1 0 1 1 2 0v3.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13 15.414V19h2.784c4.641 0 8.095-2.854 8.213-6.785a7 7 0 0 0-5.514-7.058Z"/></svg>
  