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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3.787 20.656A3.789 3.789 0 0 1 0 16.87V7.13a3.783 3.783 0 0 1 6.021-3.051L9.8 6.853a3.783 3.783 0 0 1 6.01-2.774l6.641 4.87a3.784 3.784 0 0 1 0 6.1l-6.641 4.87a3.783 3.783 0 0 1-6.01-2.772l-3.779 2.774a3.775 3.775 0 0 1-2.234.735Zm7.006-6.475a1 1 0 0 1 1 1v1.689a1.784 1.784 0 0 0 2.838 1.438l6.64-4.87a1.783 1.783 0 0 0 0-2.876l-6.64-4.87a1.784 1.784 0 0 0-2.838 1.438v1.689a1 1 0 0 1-1.591.806L4.838 5.692A1.784 1.784 0 0 0 2 7.13v9.74a1.784 1.784 0 0 0 2.838 1.438l5.362-3.933a1 1 0 0 1 .593-.194Z"/></svg>
  