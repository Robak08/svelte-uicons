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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5ZM5 11h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm8 7H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-5h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z"/></svg>
  