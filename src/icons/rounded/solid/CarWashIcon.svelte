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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.5 14h-21a7.116 7.116 0 0 1 .424-.88l2.056-3.6A5.011 5.011 0 0 1 8.321 7h7.358a5.011 5.011 0 0 1 4.341 2.52l2.057 3.6a7.116 7.116 0 0 1 .423.88Zm.473 2H19v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H1.026Q1 16.3 1 16.594V18a4 4 0 0 0 2 3.463V22a2 2 0 0 0 4 0h10a2 2 0 0 0 4 0v-.537A4 4 0 0 0 23 18v-1.406q0-.294-.026-.594ZM12 5a2.013 2.013 0 0 0 1.414-3.414l-.8-.9a.817.817 0 0 0-1.222 0l-.8.9A2 2 0 0 0 12 5Zm5.985 0A2.013 2.013 0 0 0 19.4 1.586l-.8-.9a.818.818 0 0 0-1.223 0l-.8.9A2.013 2.013 0 0 0 17.985 5Zm-12 0A2.013 2.013 0 0 0 7.4 1.586l-.8-.9a.818.818 0 0 0-1.223 0l-.8.9A2.013 2.013 0 0 0 5.985 5Z"/></svg>
  