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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.5 14h-21a7.109 7.109 0 0 1 .423-.88l2.057-3.6A5.013 5.013 0 0 1 8.321 7h7.358a5.011 5.011 0 0 1 4.341 2.52l2.057 3.6a7.116 7.116 0 0 1 .423.88ZM19 16v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H1.026Q1 16.3 1 16.594V18a4 4 0 0 0 2 3.463V22a2 2 0 0 0 4 0h10a2 2 0 0 0 4 0v-.537A4 4 0 0 0 23 18v-1.406q0-.3-.026-.594Zm4-12h-1a1 1 0 0 1 0-2h1c.673 0 .625-.448.493-.649A3.015 3.015 0 0 0 18.167 2H5.845a3.015 3.015 0 0 0-5.326-.649C0 2.283 1.926 1.939 2.012 2a1 1 0 0 1 0 2h-1c-.673 0-.625.448-.493.649A3.015 3.015 0 0 0 5.845 4h12.322a3.015 3.015 0 0 0 5.326.649C23.625 4.448 23.673 4 23 4Z"/></svg>
  