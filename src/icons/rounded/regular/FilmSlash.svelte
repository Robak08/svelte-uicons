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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-2.546-2.546A4.983 4.983 0 0 0 22 17V7c0-2.757-2.243-5-5-5H7a4.98 4.98 0 0 0-2.747.839L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM18.414 17H20c0 .45-.112.885-.302 1.284L18.414 17ZM8 4h8v7h-3.586L8 6.586V4Zm10 9h2v2h-2v-2Zm2-2h-2V9h2v2Zm-4 2v1.586L14.414 13H16Zm4-6h-2V4.184c1.161.414 2 1.514 2 2.816ZM15 20H8v-8a1 1 0 0 0-1-1H4V9a1 1 0 1 0-2 0v8c0 2.757 2.243 5 5 5h8a1 1 0 1 0 0-2Zm-9-7v2H4v-2h2Zm-2 4h2v2.816A2.996 2.996 0 0 1 4 17Z"/></svg>
  