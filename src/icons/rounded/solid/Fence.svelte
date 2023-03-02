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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 10v5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2v-5h6v5h2v-5h6v5h2v-5h6ZM1 8h22a1 1 0 1 0 0-2V2.996a2.01 2.01 0 0 0-.586-1.414l-1-1a2.003 2.003 0 0 0-2.828 0l-1 1A2.01 2.01 0 0 0 17 2.996V6h-2V2.996a2.01 2.01 0 0 0-.586-1.414l-1-1a2.003 2.003 0 0 0-2.828 0l-1 1A2.01 2.01 0 0 0 9 2.996V6H7V2.996a2.01 2.01 0 0 0-.586-1.414l-1-1a2.003 2.003 0 0 0-2.828 0l-1 1A2.01 2.01 0 0 0 1 2.996V6a1 1 0 1 0 0 2Zm0 11v2.5C1 22.879 2.122 24 3.5 24h1C5.878 24 7 22.879 7 21.5V19H1Zm8 0v2.5c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5V19H9Zm8 0v2.5c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5V19h-6Z"/></svg>
  