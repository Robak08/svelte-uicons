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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 24h14c2.757 0 5-2.243 5-5H0c0 2.757 2.243 5 5 5ZM20 1.628c0 .144-.288 2.074-1.668 8.77A2.006 2.006 0 0 1 16.372 12h-1.369l.326-3.917a.998.998 0 0 0-.913-1.079c-.564-.062-1.034.362-1.079.913L13 12h-2l-.504-6.083a.984.984 0 0 0-1.079-.913.998.998 0 0 0-.913 1.079L8.997 12h-1.36a2.007 2.007 0 0 1-1.962-1.61C4.353 3.824 4 1.771 4 1.628 4 .745 4.643.037 5.463.017c.666 0 1.375.426 2.146 1.337.341.402.678.645.901.646.231-.003.808-.519 1.103-.783C10.19.698 10.972-.009 12.033 0c.997 0 1.78.702 2.354 1.217.295.265.871.78 1.124.783.202-.002.539-.244.881-.647.785-.928 1.462-1.356 2.145-1.336C19.357.038 20 .746 20 1.628Z"/><path d="M20.793 8.336c-.191.95-.37 1.822-.502 2.466A4.018 4.018 0 0 1 16.372 14H7.637a4.015 4.015 0 0 1-3.923-3.217c-.184-.913-.344-1.715-.49-2.452A5.004 5.004 0 0 0 0 13v4h24v-4a5.006 5.006 0 0 0-3.207-4.664Z"/></svg>
  