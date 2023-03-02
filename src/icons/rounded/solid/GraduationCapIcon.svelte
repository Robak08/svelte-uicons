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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 8.48V20a1 1 0 0 1-2 0v-8.248l-7.4 3.536a5 5 0 0 1-2.577.694 5.272 5.272 0 0 1-2.7-.739l-7.38-3.513a3.691 3.691 0 0 1-.084-6.455c.027-.016.056-.031.084-.045L9.4 1.672a5.226 5.226 0 0 1 5.282.045l7.375 3.513A3.767 3.767 0 0 1 24 8.48zm-11.978 9.5a7.26 7.26 0 0 1-3.645-.972L4 14.919v2.7a5.007 5.007 0 0 0 3.519 4.778A15.557 15.557 0 0 0 12 23a15.557 15.557 0 0 0 4.481-.607A5.007 5.007 0 0 0 20 17.615v-2.691l-4.459 2.13a6.983 6.983 0 0 1-3.519.928z"/></svg>
  