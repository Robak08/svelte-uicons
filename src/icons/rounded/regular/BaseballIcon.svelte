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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm7.879 18.136a7.984 7.984 0 0 1-2.041-2.594l1.533-.613a1 1 0 1 0-.742-1.858l-1.445.578a7.481 7.481 0 0 1 0-3.3l1.445.578a1 1 0 1 0 .742-1.858l-1.533-.613a7.984 7.984 0 0 1 2.041-2.594 9.936 9.936 0 0 1 0 12.272zM4.121 5.864a7.984 7.984 0 0 1 2.041 2.594l-1.533.613a1 1 0 0 0 .742 1.858l1.445-.578A8 8 0 0 1 7 12a8 8 0 0 1-.184 1.649l-1.445-.578a1 1 0 1 0-.742 1.858l1.533.613a7.984 7.984 0 0 1-2.041 2.594 9.936 9.936 0 0 1 0-12.272zM5.507 19.59a9.955 9.955 0 0 0 2.511-3.306l1.611.645a1 1 0 1 0 .742-1.858l-1.666-.666A10.031 10.031 0 0 0 9 12a10.031 10.031 0 0 0-.295-2.4l1.666-.666a1 1 0 1 0-.742-1.858l-1.611.645A9.955 9.955 0 0 0 5.507 4.41a9.952 9.952 0 0 1 12.986 0 9.955 9.955 0 0 0-2.511 3.306l-1.611-.645a1 1 0 1 0-.742 1.858L15.3 9.6a9.951 9.951 0 0 0 0 4.81l-1.666.666a1 1 0 0 0 .742 1.858l1.611-.645a9.955 9.955 0 0 0 2.511 3.306 9.952 9.952 0 0 1-12.986 0z"/></svg>
  