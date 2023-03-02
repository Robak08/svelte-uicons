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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 13v5a1 1 0 1 1-2 0v-5a1 1 0 1 1 2 0Zm15-1c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12ZM12 22a9.951 9.951 0 0 0 6.325-2.261L4.261 5.675A9.955 9.955 0 0 0 2 12c0 5.514 4.486 10 10 10Zm1.5-10c1.379 0 2.5-1.122 2.5-2.5S14.879 7 13.5 7H11c-.685 0-1.313.352-1.677.909L13.414 12h.086Zm8.5 0c0-5.514-4.486-10-10-10a9.951 9.951 0 0 0-6.325 2.261l2.22 2.22a4.009 4.009 0 0 1 3.106-1.48h2.5c2.481 0 4.5 2.019 4.5 4.5a4.505 4.505 0 0 1-2.886 4.2l4.625 4.625a9.955 9.955 0 0 0 2.261-6.325Z"/></svg>
  