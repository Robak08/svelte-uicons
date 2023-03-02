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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.5 15c9.929-.353 9.922-14.65 0-15H10C7.243 0 5 2.243 5 5v8H3c-1.308.006-1.307 1.995 0 2h2v2H3c-1.308.006-1.307 1.995 0 2h2v4c.006 1.308 1.995 1.307 2 0v-4h8c1.308-.006 1.307-1.995 0-2H7v-2h7.5ZM7 5c0-1.654 1.346-3 3-3h4.5c7.27.232 7.265 10.77 0 11H7V5Z"/></svg>
  