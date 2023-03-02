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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H9.956A4.966 4.966 0 0 0 6.01 3.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455A4.966 4.966 0 0 0 9.956 22H19a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5zm-1.293 12.293a1 1 0 1 1-1.414 1.414L14 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L14 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414L15.414 12z"/></svg>
  