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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-house-turret {customClass}"><path d="M23 0a1 1 0 0 0-1 1v1h-2V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v3c0 2.206 1.794 4 4 4h6v12c0 1.103-.897 2-2 2a1 1 0 1 0 0 2c2.206 0 4-1.794 4-4V7.463A4.001 4.001 0 0 0 24 4V1a1 1 0 0 0-1-1Zm-3 6h-6c-1.103 0-2-.897-2-2h10c0 1.103-.897 2-2 2Zm-5.918 5.41-3-2.349a4.993 4.993 0 0 0-6.163 0l-3 2.348a4.972 4.972 0 0 0-1.918 3.938v4.152c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5v-4.152a4.974 4.974 0 0 0-1.918-3.938ZM14 19.5c0 1.379-1.122 2.5-2.5 2.5h-7A2.503 2.503 0 0 1 2 19.5v-4.152c0-.929.419-1.79 1.151-2.363l3-2.347a2.99 2.99 0 0 1 3.698-.001l3 2.348A2.983 2.983 0 0 1 14 15.348V19.5ZM10 16v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"/></svg>
  