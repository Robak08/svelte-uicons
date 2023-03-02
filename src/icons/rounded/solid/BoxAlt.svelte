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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 6V0h4v6a2 2 0 0 1-4 0zm6-1h8a5.006 5.006 0 0 0-5-5h-3zM8 0H5a5.006 5.006 0 0 0-5 5h8zm16 7v12a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V7h8.142a3.981 3.981 0 0 0 7.716 0zm-4 12a1 1 0 0 0-1-1h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1z"/></svg>
  