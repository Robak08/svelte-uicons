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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 17.5a6.5 6.5 0 0 1 11-4.684V3a3 3 0 0 0-3-3H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10.5a6.5 6.5 0 0 1-6.5-6.5zM7 7a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1zm16.707 16.707a1 1 0 0 1-1.414 0L19.886 21.3a4.457 4.457 0 0 1-2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1-.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414z"/></svg>
  