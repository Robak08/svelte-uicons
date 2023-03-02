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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 3.414V10a1 1 0 0 1-2 0V3c0-1.654 1.346-3 3-3h7a1 1 0 0 1 0 2H3.414l12.293 12.293a.999.999 0 1 1-1.414 1.414L2 3.414Zm21.951 9.583c-.453-4.628-4.186-8.423-8.808-8.933a10.057 10.057 0 0 0-4.477.506.999.999 0 0 0-.374 1.65l6.87 6.87a2.88 2.88 0 1 1-4.074 4.073l-6.87-6.87a1 1 0 0 0-1.65.374 10.053 10.053 0 0 0-.506 4.476c.51 4.622 4.304 8.354 8.931 8.808 6.301.619 11.574-4.653 10.956-10.954Z"/></svg>
  