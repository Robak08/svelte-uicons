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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-5.921-5.921A4.95 4.95 0 0 0 18 15V9c0-2.757-2.243-5-5-5H5.414L1.708.293A1 1 0 1 0 .293 1.707l4 4 18 18a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Zm-8.489-2.833A4.942 4.942 0 0 1 13 20H5a5 5 0 0 1-5-5V9c0-1.322.52-2.514 1.351-3.407L15.217 19.46ZM24 8.313v7.319c0 .757-.42 1.437-1.097 1.775a1.977 1.977 0 0 1-2.078-.188c-.037-.028-.825-.81-.825-.81V7.544s.786-.789.825-.818c.604-.454 1.399-.527 2.078-.188S24 7.556 24 8.313Z"/></svg>
  