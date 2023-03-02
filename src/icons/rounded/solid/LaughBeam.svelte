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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0ZM6 12a1 1 0 0 1-1-1c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-2 0c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-1 1Zm10.949 3.293a5.178 5.178 0 0 1-9.9.007.994.994 0 0 1 .96-1.3h7.981a.994.994 0 0 1 .959 1.293ZM18 12a1 1 0 0 1-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-1 1Z"/></svg>
  