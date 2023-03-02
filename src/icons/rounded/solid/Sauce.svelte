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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.974 16h4v2h-4ZM20 15v4a5.006 5.006 0 0 1-5 5H9a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5Zm-4.026 0a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1ZM9 8c1.5.077 6.638-.233 8 .295.206-2.139-.985-3.486-3.167-3.295L13.164.986a1.18 1.18 0 0 0-2.328 0L10.167 5C7.984 4.809 6.8 6.157 7 8.3A6.956 6.956 0 0 1 9 8Z"/></svg>
  