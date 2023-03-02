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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.165 8.832 5.249-7.707a2.5 2.5 0 0 1 3.4-.753 2.5 2.5 0 0 1 .776 3.5l-5.257 7.718Zm-1.1 1.671L7.7 18.3a1.46 1.46 0 1 1-2.486-1.533 2.5 2.5 0 1 0-4.256-2.625 6.46 6.46 0 0 0 11 6.784l5.28-7.666ZM24 20.491a3.5 3.5 0 1 0-3.5 3.5 3.5 3.5 0 0 0 3.5-3.5Z"/></svg>
  