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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 23.912c-.449.04-.9.068-1.331.068A8.106 8.106 0 0 1 1.9 22.1C.382 20.578-.174 17.909.083 15zM23.945 8.531c.155-2.725-.41-5.192-1.845-6.631s-3.9-2-6.629-1.847zm-.336 2.492a16.888 16.888 0 0 1-4.261 8.325 16.742 16.742 0 0 1-7.923 4.163L.475 12.561a16.771 16.771 0 0 1 4.177-7.909A16.888 16.888 0 0 1 12.977.391zm-5.9-.73-4-4a1 1 0 0 0-1.414 1.414L13.586 9 12 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L10.586 12 9 13.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 15 12 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 12 15 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414z"/></svg>
  