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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.5 2h-8A2.5 2.5 0 0 0 11 4.5v.3L9.735 2.606a2.536 2.536 0 0 0-1.522-1.228 2.5 2.5 0 0 0-2.846 1.163L.375 11.187a2.538 2.538 0 0 0-.3 1.931A2.5 2.5 0 0 0 2.5 15h2.7a7.074 7.074 0 1 0 13.6 0h2.7a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 21.5 2ZM3.37 12l4.162-7.209L10.542 10a7.052 7.052 0 0 0-3.613 2ZM12 21a4.074 4.074 0 1 1 4.074-4.074A4.079 4.079 0 0 1 12 21Zm9-9h-3.929A7.473 7.473 0 0 0 14 10.138V5h7Z"/></svg>
  