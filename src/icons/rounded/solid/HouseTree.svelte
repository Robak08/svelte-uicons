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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.082 11.41-3-2.349a4.993 4.993 0 0 0-6.163 0l-3 2.348a4.972 4.972 0 0 0-1.918 3.938v4.152c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5v-4.152a4.974 4.974 0 0 0-1.918-3.938ZM10 18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm13.604 4.253A3.305 3.305 0 0 1 20.687 24h-4.508A6.472 6.472 0 0 0 18 19.5v-4.152a6.962 6.962 0 0 0-2.685-5.512l-3.002-2.351a6.982 6.982 0 0 0-3.398-1.414c.057-.167.128-.33.226-.483.024-.038 4.133-4.835 4.133-4.835.99-1.01 2.51-.957 3.404-.053 0 0 4.157 4.851 4.181 4.889.439.681.483 1.552.084 2.256-.327.577-.981.904-.981.904l2.666 3.895c.404.598.44 1.465.061 2.188-.361.687-1.092 1.053-1.092 1.053l1.878 3.022a3.306 3.306 0 0 1 .13 3.347Z"/></svg>
  