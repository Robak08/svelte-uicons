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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.678 7.393c-.916.916-.707 2.838.025 4.167a2.489 2.489 0 0 1-3.961 2.924L9.516 7.258A2.489 2.489 0 0 1 12.44 3.3c1.329.731 3.251.941 4.167.025L19.086.843a2.947 2.947 0 0 1 4.071 0 2.88 2.88 0 0 1 0 4.075zM1.969 17.347a3.307 3.307 0 0 0-.585 3.853L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L2.8 22.616a3.264 3.264 0 0 0 3.855-.586l7.4-7.4-4.682-4.686z"/></svg>
  