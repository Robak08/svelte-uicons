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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 0h6a5 5 0 0 1 5 5v6H13Zm-2 0h-.959L0 10.041V11h3.172L11 3.172Zm2 18 5-5h-5Zm11-5h-3.172L13 20.828V24h.959L24 13.959Zm-13 0H0v6a5 5 0 0 0 5 5h6Zm0-7-5 5h5Zm5.787 18H19a5 5 0 0 0 5-5v-2.213ZM7.213 0H5a5 5 0 0 0-5 5v2.213Z"/></svg>
  