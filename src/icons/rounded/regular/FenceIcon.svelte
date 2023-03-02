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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 16V9a1 1 0 1 0 0-2V2.996a2.01 2.01 0 0 0-.586-1.414l-1-1a2.003 2.003 0 0 0-2.828 0l-1 1A2.01 2.01 0 0 0 17 2.996V7h-2V2.996a2.01 2.01 0 0 0-.586-1.414l-1-1a2.003 2.003 0 0 0-2.828 0l-1 1A2.01 2.01 0 0 0 9 2.996V7H7V2.996a2.01 2.01 0 0 0-.586-1.414l-1-1a2.003 2.003 0 0 0-2.828 0l-1 1A2.01 2.01 0 0 0 1 2.996V7a1 1 0 1 0 0 2v7a1 1 0 1 0 0 2v3.5C1 22.879 2.122 24 3.5 24h1C5.878 24 7 22.879 7 21.5V18h2v3.5c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5V18h2v3.5c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5V18a1 1 0 1 0 0-2Zm-2 0h-2V9h2v7ZM19 2.996l1-1 1 1V7h-2V2.996Zm-8 0 1-1 1 1V7h-2V2.996ZM13 9v7h-2V9h2ZM3 2.996l1-1 1 1V7H3V2.996ZM3 9h2v7H3V9Zm2 12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V18h2v3.5ZM7 16V9h2v7H7Zm6 5.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V18h2v3.5Zm2-5.5V9h2v7h-2Zm6 5.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V18h2v3.5Z"/></svg>
  