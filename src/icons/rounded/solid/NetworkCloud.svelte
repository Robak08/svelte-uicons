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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 20h-8.184A3 3 0 0 0 13 18.184V14.02c1.344 0 2.52-.012 3.1-.023a5.23 5.23 0 0 0 1.065-.131 4.952 4.952 0 0 0 3.7-3.7 5.012 5.012 0 0 0-3.56-6l-.176-.043c-.3-.067-.452-.1-.588-.428a6 6 0 0 0-11.367.855 6.369 6.369 0 0 0-.056 2.733 3.5 3.5 0 0 0 .448 6.588A3.684 3.684 0 0 0 6.4 14c.653.018 2.549.026 4.521.026H11v4.161A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2z"/></svg>
  