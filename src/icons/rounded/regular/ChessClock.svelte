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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 5h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2H7V3h1a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0-5 5v7a5 5 0 0 0 3 4.576V23a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 17v-7a5.006 5.006 0 0 0-5-5Zm3 12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3ZM7.5 9a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 7.5 9Zm0 7a2.5 2.5 0 1 1 2.288-3.5H8a1 1 0 1 0 0 2h1.788A2.5 2.5 0 0 1 7.5 16Zm9-7a4.5 4.5 0 1 0 3.169 7.69l.013-.008.008-.013A4.5 4.5 0 0 0 16.5 9ZM14 13.5a2.5 2.5 0 1 1 4.823.909l-1.262-1.263a1 1 0 0 0-1.415 1.414l1.263 1.263A2.473 2.473 0 0 1 16.5 16a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
  