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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0a4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026A4.948 4.948 0 0 0 19 14a5 5 0 0 0-4.145 2.207 3.98 3.98 0 0 0-5.71 0A5 5 0 0 0 5 14a4.948 4.948 0 0 0-3 1.026V4a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0V4a4 4 0 0 0-4-4z"/></svg>
  