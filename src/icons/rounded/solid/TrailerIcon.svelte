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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 12V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5v7h-4V5a1 1 0 0 0-2 0v7h-2V5a1 1 0 0 0-2 0v7h-2V5a1 1 0 0 0-2 0v7H6V5a1 1 0 0 0-2 0v7Zm8 12a3 3 0 0 0 0-6 3 3 0 0 0 0 6Zm15-5h-1v-5H0v2a5.007 5.007 0 0 0 3.017 4.589C3.655 14.3 12.868 14.651 13 21h10a1 1 0 0 0 0-2Z"/></svg>
  