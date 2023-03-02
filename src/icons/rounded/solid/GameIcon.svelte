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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.8 8.156-3.413 10.4a4.945 4.945 0 0 1-2.952 3.2A6.969 6.969 0 0 0 18 19V9a7.008 7.008 0 0 0-7-7H9.335A5.016 5.016 0 0 1 14.78.221l5.686 1.746A5.021 5.021 0 0 1 23.8 8.156zM16 9v10a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V9a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5zm-4 4a2 2 0 0 0-4 0 2 2 0 0 0-4 0c0 1.45 1.544 3.391 2.714 4.378a1.991 1.991 0 0 0 2.572 0C10.456 16.391 12 14.45 12 13z"/></svg>
  