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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m6 4.294 3 .571v12.354l-3 .572Zm8 1.524-3-.572v11.592l3-.571Zm5 .952-3-.57v9.687l3-.572ZM4 3.913l-1-.19A2.008 2.008 0 0 0 2.433.045 2 2 0 0 0 1 3.723V23a1 1 0 0 0 2 0v-4.638l1-.19Zm17 3.238v7.783a3.12 3.12 0 0 0 3-3.054v-1.675a3.119 3.119 0 0 0-3-3.054Z"/></svg>
  