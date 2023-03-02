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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm10.001 3.548c0 2.063-1.3 3.944-3.234 4.681-1.341.512-2.608.771-3.768.771-1.634 0-3.098-.399-4.513-.785-1.348-.368-2.62-.715-3.986-.715-1.571 0-2.562.101-3.419.349a3.932 3.932 0 0 1-3.48-.644A3.977 3.977 0 0 1 .001 16V8.452a5.04 5.04 0 0 1 3.233-4.681C4.575 3.259 5.843 3 7.002 3c1.634 0 3.097.399 4.513.785 1.348.368 2.62.715 3.986.715 1.57 0 2.562-.101 3.419-.349a3.932 3.932 0 0 1 3.481.644A3.977 3.977 0 0 1 24.001 8v7.548ZM6.001 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm10 4c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4Zm4 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/></svg>
  