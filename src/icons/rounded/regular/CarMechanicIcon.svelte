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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.02 9.52A5.011 5.011 0 0 0 15.679 7H8.321A5.013 5.013 0 0 0 3.98 9.52l-2.058 3.6A7.022 7.022 0 0 0 1 16.594V18a4 4 0 0 0 2 3.463V22a2 2 0 0 0 4 0h10a2 2 0 0 0 4 0v-.537A4 4 0 0 0 23 18v-1.406a7.007 7.007 0 0 0-.923-3.474Zm-14.3.992A3.009 3.009 0 0 1 8.321 9h7.358a3.006 3.006 0 0 1 2.6 1.512L20.277 14H3.723ZM21 18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.406A5.119 5.119 0 0 1 3.036 16H5v1a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1h1.964a5.119 5.119 0 0 1 .036.594Zm2.493-13.351A3.015 3.015 0 0 1 18.167 4H5.845a3.015 3.015 0 0 1-5.326.649C0 3.717 1.926 4.061 2.012 4a1 1 0 0 0 0-2h-1c-.673 0-.625-.448-.493-.649A3.015 3.015 0 0 1 5.845 2h12.322a3.015 3.015 0 0 1 5.326-.649c.524.932-1.407.588-1.493.649a1 1 0 0 0 0 2h1c.673 0 .625.448.493.649Z"/></svg>
  