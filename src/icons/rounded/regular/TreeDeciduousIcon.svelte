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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.483 5.157c-.315-.067-.591-.371-.703-.772C17.06 1.803 14.683 0 12 0S6.94 1.803 6.22 4.385c-.112.401-.388.705-.703.772a7.002 7.002 0 0 0-5.514 7.058C.115 15.956 3.367 19 7.251 19H11v4a1 1 0 1 0 2 0v-4h2.784c4.641 0 8.095-2.854 8.213-6.785a7 7 0 0 0-5.514-7.058Zm3.515 6.997C21.912 15.008 19.357 17 15.784 17H13v-1.586l3.707-3.707a.999.999 0 1 0-1.414-1.414L13 12.586V9a1 1 0 1 0-2 0v3.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414L11 15.414V17H7.251c-2.814 0-5.169-2.174-5.249-4.846a5 5 0 0 1 3.936-5.042c1.048-.226 1.895-1.064 2.208-2.19C8.626 3.201 10.21 2 11.999 2s3.373 1.201 3.853 2.922c.314 1.126 1.16 1.965 2.208 2.19a5 5 0 0 1 3.937 5.042Z"/></svg>
  