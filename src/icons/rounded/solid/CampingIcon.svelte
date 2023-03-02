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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.887 16.573 16.451 24H7.188l3.933-7.438a.971.971 0 0 1 1.766.011Zm10.635.295L16.535 2.9a5 5 0 0 0-9.057-.026L.47 16.9A4.995 4.995 0 0 0 4.929 24l4.4-8.322a2.97 2.97 0 0 1 5.366.047L18.669 24H19a5 5 0 0 0 4.522-7.132Z"/></svg>
  