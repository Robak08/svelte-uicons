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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 17a7.008 7.008 0 0 1-7 7c-6.078.117-9.334-7.638-5-11.89V5c.211-6.609 9.791-6.6 10 0v7.11A7.009 7.009 0 0 1 18 17Zm-4 0a3 3 0 0 0-2-2.828V12a1 1 0 0 0-2 0v2.172A3 3 0 1 0 14 17ZM24 3a3 3 0 0 0-6 0 3 3 0 0 0 6 0Zm-2 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"/></svg>
  