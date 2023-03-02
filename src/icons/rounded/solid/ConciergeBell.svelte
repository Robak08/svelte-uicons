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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 21H13v-2h7.343A2.66 2.66 0 0 0 23 16.343c0-5.88-4.371-10.79-10-11.298V3h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1v2.044c-5.629.509-10 5.418-10 11.299A2.66 2.66 0 0 0 3.657 19H11v2H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"/></svg>
  