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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path fill-rule="evenodd" d="M12 0C5.24 0 0 4.952 0 11.64c0 3.498 1.434 6.522 3.769 8.61a.962.962 0 0 1 .323.684l.065 2.134a.96.96 0 0 0 1.347.849l2.382-1.051a.962.962 0 0 1 .641-.047c1.094.301 2.259.461 3.473.461 6.76 0 12-4.952 12-11.64S18.76 0 12 0zm7.206 8.956-3.525 5.593a1.8 1.8 0 0 1-2.603.48l-2.804-2.103a.719.719 0 0 0-.867.003L5.62 15.802c-.505.383-1.165-.221-.827-.758l3.525-5.593a1.8 1.8 0 0 1 2.603-.48l2.804 2.103a.719.719 0 0 0 .867-.003l3.787-2.873c.506-.383 1.165.221.827.758z" clip-rule="evenodd"/></svg>
  