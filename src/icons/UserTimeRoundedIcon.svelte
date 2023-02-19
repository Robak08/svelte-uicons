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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-user-time {customClass}"><path d="M17 24a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm1.707 6.707a1 1 0 0 0 0-1.414L18 16.586V15a1 1 0 0 0-2 0v2a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414 0zM2 23a8.3 8.3 0 0 1 6.221-8.024 1 1 0 0 0-.442-1.952A10.213 10.213 0 0 0 0 23a1 1 0 0 0 2 0zm6.474-12a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5zm0-9a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5z"/></svg>
  