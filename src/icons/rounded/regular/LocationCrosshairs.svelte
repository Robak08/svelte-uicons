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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3Zm11-4h-1.05c-.471-4.717-4.233-8.48-8.95-8.95V1a1 1 0 1 0-2 0v1.05C6.283 2.52 2.52 6.283 2.05 11H1a1 1 0 1 0 0 2h1.05c.471 4.717 4.233 8.48 8.95 8.95V23a1 1 0 1 0 2 0v-1.05c4.717-.471 8.48-4.233 8.95-8.95H23a1 1 0 1 0 0-2Zm-11 9c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z"/></svg>
  