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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 16c.074 2.641-4.074 2.641-4 0 .029-5.3 3.972-5.3 4 0Zm8-1.182C22 19.881 17.514 24 12 24S2 19.881 2 14.818C2 5.23 8.606 0 12 0a5.762 5.762 0 0 1 5.589 4.355c.905 3.763 4.787 6.352 4.411 10.463ZM16 16c.094-7.959-8.094-7.958-8 0 .041 5.3 7.96 5.3 8 0Z"/></svg>
  