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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 22a2.982 2.982 0 0 1-2.122-.879L.334 19.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 1 1 1.378 1.448L6.1 21.138A2.964 2.964 0 0 1 4 22zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM4 14a2.982 2.982 0 0 1-2.122-.879L.293 11.536a1 1 0 0 1 1.414-1.414l1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.6-3.431a1 1 0 1 1 1.382 1.448L6.1 13.138A2.964 2.964 0 0 1 4 14zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM4 6a2.982 2.982 0 0 1-2.122-.879L.334 3.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04L8.311.276a1 1 0 0 1 1.378 1.448L6.1 5.138A2.964 2.964 0 0 1 4 6zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"/></svg>
  