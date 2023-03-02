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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 14a5.006 5.006 0 0 0-5-5H8a5.006 5.006 0 0 0-5 5v1a9 9 0 0 0 18 0ZM15 0H9a4 4 0 0 0-4 4v3.685A6.952 6.952 0 0 1 8 7h8a6.952 6.952 0 0 1 3 .685V4a4 4 0 0 0-4-4Zm-5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/></svg>
  