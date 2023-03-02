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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.5 18a1.5 1.5 0 0 1-1.061-.44l-7.671-7.671a2.5 2.5 0 0 0-3.536 0L2.57 17.551A1.5 1.5 0 0 1 .449 15.43l7.662-7.662a5.505 5.505 0 0 1 7.778 0l7.672 7.672A1.5 1.5 0 0 1 22.5 18Z"/></svg>
  