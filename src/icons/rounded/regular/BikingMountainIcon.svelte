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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 13a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14-8a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm-8.636-9.723a.988.988 0 0 1-.051-1.457c.169-.16 2.653-2.44 2.653-2.44l3.327 3.327a1 1 0 0 0 1.414-1.414l-4-4a.961.961 0 0 0-.124-.107A6.454 6.454 0 0 0 9.923 4C8.521 4 5 5.19 5 8a3 3 0 0 0 3 3c.024 0 .046-.005.069-.006a2.99 2.99 0 0 0 .993 1.8L11 14.459V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.349-.759ZM7 8c0-1.214 2.172-2 2.923-2a4.194 4.194 0 0 1 1.339.227s-2.316 2.134-2.343 2.16C8.538 8.749 8.225 9 8 9a1 1 0 0 1-1-1Zm7-5.5A2.5 2.5 0 1 1 16.5 5 2.5 2.5 0 0 1 14 2.5Z"/></svg>
  