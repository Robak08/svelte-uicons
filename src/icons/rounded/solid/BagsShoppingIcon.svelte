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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 11H10c-2.206 0-4 1.794-4 4v4c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5v-4c0-2.206-1.794-4-4-4Zm-1 5c0 2.206-1.794 4-4 4s-4-1.794-4-4v-1a1 1 0 1 1 2 0v1c0 1.103.897 2 2 2s2-.897 2-2v-1a1 1 0 1 1 2 0v1Zm0-7c0-2.206-1.794-4-4-4h-1v-.5C14 2.019 11.981 0 9.5 0S5 2.019 5 4.5V5H4C1.794 5 0 6.794 0 9v5a5.009 5.009 0 0 0 4 4.899V15c0-3.309 2.691-6 6-6h9ZM7 4.5C7 3.121 8.122 2 9.5 2S12 3.121 12 4.5V5H7v-.5Z"/></svg>
  