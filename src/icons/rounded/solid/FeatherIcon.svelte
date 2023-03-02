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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.82 19.306c.054.044.116.074.171.117l-4.284 4.284a1 1 0 0 1-1.414-1.414l4.285-4.285a7.841 7.841 0 0 0 1.242 1.298zm4.18-6.72 6.293-6.293a1 1 0 1 1 1.414 1.414L14.414 11H21.6a30.726 30.726 0 0 0 2.28-6.075A3.992 3.992 0 0 0 19.04.119 31.838 31.838 0 0 0 10 4.107zm2.5.414c-.025 0-.047-.013-.072-.014l-6.437 6.437A7.446 7.446 0 0 0 10.589 21a8.184 8.184 0 0 0 5.9-2.545A28.716 28.716 0 0 0 20.533 13zM8 14.5V5.507a26.454 26.454 0 0 0-2.744 2.362A7.757 7.757 0 0 0 3.009 13.7 7.646 7.646 0 0 0 4.578 18l3.436-3.437C8.013 14.547 8 14.525 8 14.5z"/></svg>
  