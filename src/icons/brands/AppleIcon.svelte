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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.546 12.763a5.453 5.453 0 0 1 2.597-4.576 5.582 5.582 0 0 0-4.399-2.378c-1.851-.194-3.645 1.107-4.588 1.107-.961 0-2.413-1.088-3.977-1.056a5.86 5.86 0 0 0-4.93 3.007c-2.131 3.69-.542 9.114 1.5 12.097 1.022 1.461 2.215 3.092 3.778 3.035 1.529-.063 2.1-.975 3.945-.975 1.828 0 2.364.975 3.958.938 1.64-.027 2.674-1.467 3.66-2.942a12.065 12.065 0 0 0 1.673-3.408 5.27 5.27 0 0 1-3.217-4.849zM15.535 3.847A5.371 5.371 0 0 0 16.763 0a5.468 5.468 0 0 0-3.535 1.829 5.111 5.111 0 0 0-1.261 3.705 4.521 4.521 0 0 0 3.568-1.687z"/></svg>
  