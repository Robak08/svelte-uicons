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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 13a4.083 4.083 0 0 0-.845.1 3.674 3.674 0 0 0-.446-1.592 3.6 3.6 0 0 0 .71-.362 3.618 3.618 0 0 0 .581-.51 3.2 3.2 0 0 0 1.291.869 3.674 3.674 0 0 0-.446 1.592A4.083 4.083 0 0 0 12 13Zm6.029-4.539L15.19 9.646A1.6 1.6 0 0 1 13 8.163V5.08a7.006 7.006 0 0 1 5.029 3.381ZM11 5.08v3.083a1.6 1.6 0 0 1-2.185 1.486L5.956 8.485A7 7 0 0 1 11 5.08Zm-5.793 5.259 2.63 1.073a2.128 2.128 0 0 1 .924 3.239L7.014 16.9a7 7 0 0 1-1.807-6.561Zm3.4 7.778L10.4 15.8a2.053 2.053 0 0 1 3.208.011l1.78 2.31a7.03 7.03 0 0 1-6.783-.004Zm8.376-1.206-1.733-2.249a2.127 2.127 0 0 1 .93-3.256l2.608-1.091a7 7 0 0 1-1.807 6.596Z"/></svg>
  