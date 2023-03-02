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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 7h-4V3c0-1.654-1.346-3-3-3S9 1.346 9 3v4H5c-1.654 0-3 1.346-3 3s1.346 3 3 3h4v8c0 1.654 1.346 3 3 3s3-1.346 3-3v-8h4c1.654 0 3-1.346 3-3s-1.346-3-3-3Z"/></svg>
  