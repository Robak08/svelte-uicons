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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.077 13.12-2.057-3.6A5.011 5.011 0 0 0 15.679 7H8.321A5.011 5.011 0 0 0 3.98 9.52l-2.057 3.6A7.007 7.007 0 0 0 1 16.594V18a4 4 0 0 0 2 3.463V22a2 2 0 0 0 4 0h10a2 2 0 0 0 4 0v-.537A4 4 0 0 0 23 18v-1.406a7.007 7.007 0 0 0-.923-3.474Zm-16.36-2.608A3.006 3.006 0 0 1 8.321 9h7.358a3.006 3.006 0 0 1 2.6 1.512L20.277 14H3.723ZM21 18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.406A5.119 5.119 0 0 1 3.036 16H5v1a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1h1.964a5.119 5.119 0 0 1 .036.594ZM10.586 4.414a2 2 0 0 1 0-2.828l.8-.9a.817.817 0 0 1 1.222 0l.8.9A2.013 2.013 0 0 1 12 5a1.99 1.99 0 0 1-1.414-.586Zm5.985 0a2 2 0 0 1 0-2.828l.8-.9a.818.818 0 0 1 1.223 0l.8.9A2.013 2.013 0 0 1 17.985 5a1.992 1.992 0 0 1-1.414-.586Zm-12 0a2 2 0 0 1 0-2.828l.8-.9a.818.818 0 0 1 1.229 0l.8.9A2.013 2.013 0 0 1 5.985 5a1.992 1.992 0 0 1-1.414-.586Z"/></svg>
  