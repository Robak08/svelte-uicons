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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 12a4.969 4.969 0 0 1 .833-2.753L2.845 4.259a11.954 11.954 0 0 0 0 15.482l4.988-4.988A4.969 4.969 0 0 1 7 12ZM21.155 4.259l-4.988 4.988a4.966 4.966 0 0 1 0 5.506l4.988 4.988a11.954 11.954 0 0 0 0-15.482ZM12 17a4.969 4.969 0 0 1-2.753-.833l-4.988 4.988a11.954 11.954 0 0 0 15.482 0l-4.988-4.988A4.969 4.969 0 0 1 12 17ZM12 7a4.969 4.969 0 0 1 2.753.833l4.988-4.988a11.954 11.954 0 0 0-15.482 0l4.988 4.988A4.969 4.969 0 0 1 12 7Z"/></svg>
  