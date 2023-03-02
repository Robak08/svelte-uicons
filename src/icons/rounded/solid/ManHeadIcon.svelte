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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 11.5a3.5 3.5 0 0 1-3.268 3.492A11.037 11.037 0 0 1 16 19.954V23a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3.047a11.264 11.264 0 0 1-4.542-4.572 1 1 0 1 1 1.776-.92C6.4 16.717 9.1 19 12 19c3.129 0 6.212-2.779 7.128-5.376a.994.994 0 0 1 1.117-.651A1.606 1.606 0 0 0 20.5 13a1.5 1.5 0 0 0 .27-2.972 1 1 0 0 1-.816-.878 7.962 7.962 0 0 0-4.013-6.11 12.8 12.8 0 0 1-1.128 2.541 15.09 15.09 0 0 1-4.956 4.467 1.5 1.5 0 1 1-1.724.84 15.806 15.806 0 0 1-7.257 1.1A1 1 0 0 1 .5 10.136a6.372 6.372 0 0 0 1.319-2.369C3.124 4.674 5.1 0 12 0a9.975 9.975 0 0 1 9.851 8.274A3.5 3.5 0 0 1 24 11.5Zm-8 0a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5Z"/></svg>
  