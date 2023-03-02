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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24.011c-1.872 0-3.46-1.083-4.144-2.825L.069 1.365A1 1 0 0 1 1.93.634l7.787 19.82C10.168 21.6 11.192 22.01 12 22.01s1.832-.409 2.283-1.556L22.069.635a1 1 0 1 1 1.861.731l-7.787 19.82c-.684 1.742-2.272 2.825-4.144 2.825Z"/></svg>
  