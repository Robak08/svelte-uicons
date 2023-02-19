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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-tally-4 {customClass}"><path d="M2 1v22a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0Zm21-1a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Zm-7 0a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1ZM8 0a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"/></svg>
  