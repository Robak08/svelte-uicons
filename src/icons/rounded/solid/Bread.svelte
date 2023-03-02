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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.359 1.641C15.014-4.362 2.345 7.427.493 14.82c-2.144 6.647 2.647 10.706 8.687 8.687 7.39-1.849 19.182-14.522 13.179-21.866ZM10 19a1 1 0 0 1-1-1 2.783 2.783 0 0 0-3-3 1 1 0 0 1 0-2 4.784 4.784 0 0 1 5 5 1 1 0 0 1-1 1Zm4-4a1 1 0 0 1-1-1 2.783 2.783 0 0 0-3-3 1 1 0 0 1 0-2 4.784 4.784 0 0 1 5 5 1 1 0 0 1-1 1Zm4-4a1 1 0 0 1-1-1 2.783 2.783 0 0 0-3-3 1 1 0 0 1 0-2 4.784 4.784 0 0 1 5 5 1 1 0 0 1-1 1Z"/></svg>
  