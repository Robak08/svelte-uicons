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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.485 3.515a11.994 11.994 0 1 0 0 16.97 12.013 12.013 0 0 0 0-16.97zm1.449 7.417a7.964 7.964 0 0 1-8.865-8.866 9.961 9.961 0 0 1 8.865 8.866zM2.066 13.068a7.964 7.964 0 0 1 8.865 8.866 9.961 9.961 0 0 1-8.865-8.866zm17.005 6a9.947 9.947 0 0 1-6.127 2.879 9.971 9.971 0 0 0-10.9-10.894 9.979 9.979 0 0 1 9.012-9.003A9.986 9.986 0 0 0 21 13c.317 0 .635-.016.953-.046a9.951 9.951 0 0 1-2.882 6.117z"/></svg>
  