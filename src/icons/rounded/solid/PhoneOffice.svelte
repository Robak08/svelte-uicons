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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 20c-2.206 0-4-1.794-4-4V4c0-2.206 1.794-4 4-4s4 1.794 4 4v12c0 2.206-1.794 4-4 4ZM19 2H9.657c.222.626.343 1.299.343 2v12c0 3.309-2.691 6-6 6a5.97 5.97 0 0 1-3.693-1.274A5.008 5.008 0 0 0 5 24h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm-6 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-5a1 1 0 0 1-1-1V4h4c1.654 0 3 1.346 3 3h-6Z"/></svg>
  