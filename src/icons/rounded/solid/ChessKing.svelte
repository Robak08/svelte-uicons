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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.328 10.222a5.038 5.038 0 0 0-3.27-2.389A40.266 40.266 0 0 0 13 7.016V5h2a1 1 0 0 0 0-2h-2V1a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2.016a40.266 40.266 0 0 0-7.058.817A5 5 0 0 0 .249 14.27L3.089 22H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-.089l2.856-7.774a5.011 5.011 0 0 0-.439-4.004Z"/></svg>
  