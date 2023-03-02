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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 8.727v5.509c0 .443-.298.839-.725.961L13 15.849V9.417c0-.463.312-.877.757-1.006l1.316-.381a.72.72 0 0 1 .637.117c.185.138.29.35.29.58ZM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-6-3.273c0-.865-.396-1.659-1.088-2.179a2.703 2.703 0 0 0-2.396-.439L13.2 6.49a3.034 3.034 0 0 0-1.2.674 3.034 3.034 0 0 0-1.2-.674l-1.316-.381a2.707 2.707 0 0 0-2.396.439A2.704 2.704 0 0 0 6 8.727v5.509c0 1.332.895 2.518 2.174 2.883l2.348.674a5.349 5.349 0 0 0 2.957 0l2.348-.673a3.013 3.013 0 0 0 2.175-2.884V8.727Zm-7.757-.316L8.927 8.03a.712.712 0 0 0-.637.117.717.717 0 0 0-.29.58v5.509c0 .443.298.839.724.96l2.276.653V9.417c0-.463-.312-.877-.757-1.006Z"/></svg>
  