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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 12a1 1 0 0 0-1 1c0 4.963-4.038 9-9 9h-1c-1.103 0-2-.897-2-2v-6.613l7.316-2.439a.999.999 0 0 0 .632-1.265.998.998 0 0 0-1.265-.632l-6.684 2.228V9.386l7.316-2.439a.999.999 0 0 0 .632-1.265.998.998 0 0 0-1.265-.632L7.998 7.278V1a1 1 0 1 0-2 0v6.946L2.682 9.051a.999.999 0 1 0 .633 1.897l2.684-.895v1.893l-3.316 1.105a.999.999 0 1 0 .633 1.897L6 14.053v5.946c0 2.206 1.794 4 4 4h1c6.065 0 11-4.935 11-11a1 1 0 0 0-1-1Z"/></svg>
  