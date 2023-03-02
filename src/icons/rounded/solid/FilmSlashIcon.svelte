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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 10.242V11H4V8.242l-2-2V17c0 2.757 2.243 5 5 5h10.758L6 10.242Zm0 9.573a2.996 2.996 0 0 1-2-2.816h2v2.816Zm0-4.816H4v-2h2v2Zm17.707 7.293-2.546-2.546A4.98 4.98 0 0 0 22 16.999V7c0-2.757-2.243-5-5-5H7a4.98 4.98 0 0 0-2.747.839L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM16 12.999h-1.586l-2-2H16v2Zm3.699 5.284-1.284-1.284h1.586a3 3 0 0 1-.301 1.284ZM20 14.999h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-2-4V4.183c1.161.414 2 1.514 2 2.816h-2Z"/></svg>
  