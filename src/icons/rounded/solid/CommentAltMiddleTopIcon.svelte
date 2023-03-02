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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 24H4c-2.207 0-4-1.794-4-4V8c0-2.206 1.793-4 4-4h2.924L10.691.826c.737-.656 1.881-.657 2.638.018L17.148 4H20c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4Z"/></svg>
  