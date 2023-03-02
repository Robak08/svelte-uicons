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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.291 8.552a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5L9.613.582a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566A2.713 2.713 0 0 1 21.292 10H2.708A2.713 2.713 0 0 1 .291 8.552zM23 22a2 2 0 0 0-2-2v-8h-2v8h-3v-8h-2v8h-4v-8H8v8H5v-8H3v8a2 2 0 0 0-2 2 1 1 0 0 0 0 2h22a1 1 0 0 0 0-2z"/></svg>
  