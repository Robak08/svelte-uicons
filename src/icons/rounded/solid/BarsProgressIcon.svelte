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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 11h16c5.276-.138 5.272-7.863 0-8H4c-5.276.138-5.272 7.863 0 8Zm18-4c0 1.103-.897 2-2 2h-4V5h4c1.103 0 2 .897 2 2Zm-2 6H4c-5.276.138-5.272 7.863 0 8h16c5.276-.138 5.272-7.863 0-8Zm0 6H10v-4h10c2.629.048 2.627 3.953 0 4Z"/></svg>
  