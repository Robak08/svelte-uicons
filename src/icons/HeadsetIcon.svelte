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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-headset {customClass}"><path d="M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6h-3a1 1 0 0 0 0 2h5a5 5 0 0 0 2-9.576ZM5 20a3 3 0 0 1 0-6Zm14 0v-6a3 3 0 0 1 0 6Z"/></svg>
  