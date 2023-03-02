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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.535 14.725a1.99 1.99 0 0 0-1.726-.716A10.422 10.422 0 0 0 13 19.951v-6.035A6.009 6.009 0 0 0 18 8c0-2.793-1.943-5.152-3.844-7.091A2.865 2.865 0 0 0 13.8.6 16.955 16.955 0 0 0 12 7.966a1 1 0 1 1-2 .068 18.566 18.566 0 0 1 1.846-8 3 3 0 0 0-2 .874C7.943 2.848 6 5.207 6 8a6.009 6.009 0 0 0 5 5.916v6.036a10.421 10.421 0 0 0-8.809-5.943 1.992 1.992 0 0 0-1.726.716 1.971 1.971 0 0 0-.393 1.792C2.111 23.855 11.591 24 11.994 24h.012c.4 0 9.884-.145 11.923-7.483a1.975 1.975 0 0 0-.394-1.792Z"/></svg>
  