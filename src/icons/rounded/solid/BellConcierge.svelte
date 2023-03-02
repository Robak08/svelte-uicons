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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.402 18A2.601 2.601 0 0 0 24 15.402V14c0-6.279-4.851-11.438-11-11.949V1a1 1 0 0 0-2 0v1.051C4.851 2.562 0 7.721 0 14v1.402A2.601 2.601 0 0 0 2.598 18H11v2H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2H13v-2h8.402Z"/></svg>
  