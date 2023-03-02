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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 14a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2V6h9v8ZM18.35.83a24.742 24.742 0 0 0-12.7 0A5.057 5.057 0 0 0 2.287 4h19.426A5.057 5.057 0 0 0 18.35.83ZM18 17a1 1 0 0 1-2 0v-1H8v1a1 1 0 0 1-2 0v-1H2v1a4.98 4.98 0 0 0 2 3.975v.525a2.5 2.5 0 0 0 4.949.5h6.1A2.5 2.5 0 0 0 20 21.5v-.525A4.98 4.98 0 0 0 22 17v-1h-4Zm4-8V6h-9v8h9a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"/></svg>
  