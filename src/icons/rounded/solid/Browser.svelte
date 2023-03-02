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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 9v9a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9zm14 10H6a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm4-4H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm6-8V6a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v1zM10 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM7 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM4 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
  