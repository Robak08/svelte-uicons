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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5Zm-.293 5.707L8.414 14H11a1 1 0 0 1 0 2H8c-1.654 0-3-1.346-3-3v-3a1 1 0 0 1 2 0v2.586l4.293-4.293a.999.999 0 1 1 1.414 1.414Zm11.292-1.394v7.319c0 .757-.42 1.437-1.097 1.775a1.977 1.977 0 0 1-2.078-.188c-.037-.028-.825-.81-.825-.81V7.544s.786-.789.825-.818c.604-.454 1.399-.527 2.078-.188s1.097 1.018 1.097 1.775Z"/></svg>
  