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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.517 2.087A4.01 4.01 0 0 0 20 0H4A4.01 4.01 0 0 0 .483 2.087a3.912 3.912 0 0 0 .132 4.04A13.555 13.555 0 0 0 11 11.965V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4V11.965a13.555 13.555 0 0 0 10.385-5.838 3.912 3.912 0 0 0 .132-4.04ZM4 2h16a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2Zm8 8a12.006 12.006 0 0 1-8.989-4h17.978A12 12 0 0 1 12 10Z"/></svg>
  