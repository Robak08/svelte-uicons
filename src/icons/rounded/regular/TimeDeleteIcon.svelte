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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.707 15.293a1 1 0 0 0-1.414 0L19.5 18.086l-2.793-2.793a1 1 0 0 0-1.414 1.414l2.793 2.793-2.793 2.793a1 1 0 1 0 1.414 1.414l2.793-2.793 2.793 2.793a1 1 0 0 0 1.414-1.414L20.914 19.5l2.793-2.793a1 1 0 0 0 0-1.414z"/><path d="M12 22a10 10 0 1 1 10-10 1 1 0 0 0 2 0 12 12 0 1 0-12 12 1 1 0 0 0 0-2z"/><path d="M12 6a1 1 0 0 0-1 1v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1z"/></svg>
  