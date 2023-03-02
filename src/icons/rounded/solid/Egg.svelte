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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C6.294 0 2 8.493 2 14a10 10 0 0 0 20 0c0-5.507-4.294-14-10-14Zm1 7a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm2.5 6a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>
  