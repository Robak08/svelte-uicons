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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0h-6a5.006 5.006 0 0 0-5 5v.1A5.009 5.009 0 0 0 4 10v.1A5.009 5.009 0 0 0 0 15v4a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-.1a5.009 5.009 0 0 0 4-4.9v-.1A5.009 5.009 0 0 0 24 9V5a5.006 5.006 0 0 0-5-5zM2 15a3 3 0 0 1 3-3h6a2.988 2.988 0 0 1 2.638 1.6l-3.455 3.463-.475-.479A1.992 1.992 0 0 0 7 16.473l-4.621 3.96A2.96 2.96 0 0 1 2 19zm12 4a3 3 0 0 1-3 3H5a2.971 2.971 0 0 1-1.118-.221L8.288 18l.476.481a2 2 0 0 0 2.828 0L14 16.068zm4-5a3 3 0 0 1-2 2.816V15a5.006 5.006 0 0 0-5-5H6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zm4-5a3 3 0 0 1-2 2.816V10a5.006 5.006 0 0 0-5-5h-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zM4 15a1 1 0 1 1 1 1 1 1 0 0 1-1-1z"/></svg>
  