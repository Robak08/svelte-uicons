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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1-1.414 0L19.886 21.3a4.457 4.457 0 0 1-2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1-.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zM17.5 20a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zM13 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0V3a3 3 0 0 0-3-3H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z"/></svg>
  