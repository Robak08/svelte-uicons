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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 20h16a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2ZM7 8h10a1 1 0 0 0 0-2h-1.484l1.71-2.954a1.423 1.423 0 0 0-.413-1.72 1.392 1.392 0 0 0-1.7-.069l-1.11.6L12.932.448A1.5 1.5 0 0 0 10.745.5L9.717 1.855 8.672 1.3a1.442 1.442 0 0 0-2.157 1.791L8.2 6H7a1 1 0 0 0 0 2Zm11.672 10a44.865 44.865 0 0 1-2.372-8H7.7a44.865 44.865 0 0 1-2.374 8Z"/></svg>
  