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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C.339.026-4.347 15.052 5 21.733V15a1 1 0 0 1 2 0v7.9a12.008 12.008 0 0 0 10 0V15a1 1 0 0 1 2 0v6.733C28.351 15.047 23.654.024 12 0ZM9 11c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-2 0Zm3 9c-2.63-.074-2.63-5.927 0-6 2.63.074 2.63 5.927 0 6Zm6-8a1 1 0 0 1-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-1 1Z"/></svg>
  