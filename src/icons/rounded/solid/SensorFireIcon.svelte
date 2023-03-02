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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 9.195a.763.763 0 0 0-1.163.174c-1.369 2.316-1.055 5.632-2.282 5.632-.581 0-.49-1.004-.764-1.624a.64.64 0 0 0-1.086-.133c-1.157 1.432-2.271 3.953-1.246 6.416 1.097 2.636 3.575 4.497 6.425 4.33a6.5 6.5 0 0 0 6.115-6.489c0-3.417-3.789-6.333-6-8.305Zm1.402 11.928a2.501 2.501 0 0 1-3.805 0c-.867-1.011-.699-2.557.243-3.499l1.103-1.103a.786.786 0 0 1 1.112 0l1.103 1.103c.942.942 1.11 2.487.243 3.499Zm-9.789-.695c-1.324-3.181-.075-6.446 1.536-8.441a2.623 2.623 0 0 1 2.412-.962c.161.021.317.057.469.105.229-.898.548-1.869 1.085-2.778a2.746 2.746 0 0 1 1.948-1.318 2.768 2.768 0 0 1 2.268.669c.221.197.458.404.705.619 1.272 1.11 2.781 2.428 3.964 3.973V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h7.25a9.32 9.32 0 0 1-2.636-3.573ZM4 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  