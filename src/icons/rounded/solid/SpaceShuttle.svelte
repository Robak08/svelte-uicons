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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12c0 .785-.378 1.933-2.178 2.946a8.292 8.292 0 0 1-2.96.964 6.914 6.914 0 0 0-.26-7.851 8.38 8.38 0 0 1 3.22 1C23.622 10.067 24 11.215 24 12Zm-8.1-4H6v8h10.421c2.149-2.664 2.096-5.731-.521-8ZM4 8H3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1Zm8.485-2-1.928-3.444A5.007 5.007 0 0 0 6.194 0H5.038a3 3 0 0 0-3 3v3ZM2 18v3a3 3 0 0 0 3 3h1.156a5.005 5.005 0 0 0 4.362-2.556L12.447 18Z"/></svg>
  