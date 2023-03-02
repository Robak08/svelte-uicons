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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 22V10c0-.091-.109-9.093-9.572-9.987a2.838 2.838 0 0 0-2.881 1.8c-.992 2.47-2.886 3.583-5.424 4.5A3.235 3.235 0 0 0 2 9.355 2.649 2.649 0 0 0 4.645 12H9.82c-1.249 5.952-6.061 9.328-7.106 10H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2Z"/></svg>
  