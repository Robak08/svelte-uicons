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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3Zm9 0a1 1 0 0 1-1 1h-1.05c-.471 4.717-4.233 8.48-8.95 8.95V23a1 1 0 1 1-2 0v-1.05c-4.717-.471-8.48-4.233-8.95-8.95H1a1 1 0 1 1 0-2h1.05C2.52 6.283 6.283 2.52 11 2.05V1a1 1 0 1 1 2 0v1.05c4.717.471 8.48 4.233 8.95 8.95H23a1 1 0 0 1 1 1Zm-7 0c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5Z"/></svg>
  