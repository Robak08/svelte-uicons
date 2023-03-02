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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 20h8c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5H5C2.244 4 0 6.243 0 9v6c0 2.757 2.244 5 5 5Zm.292-5.707L9.585 10H6.999a1 1 0 0 1 0-2h3c1.654 0 3 1.346 3 3v3a1 1 0 0 1-2 0v-2.586l-4.293 4.293a.999.999 0 1 1-1.414-1.414Zm18.707-5.98v7.319c0 .757-.42 1.437-1.097 1.775a1.977 1.977 0 0 1-2.078-.188c-.037-.028-.825-.81-.825-.81V7.544s.786-.789.825-.818c.604-.454 1.399-.527 2.078-.188s1.097 1.018 1.097 1.775Z"/></svg>
  