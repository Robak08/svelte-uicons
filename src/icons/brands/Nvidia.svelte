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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.948 8.798v-1.43c.142-.009.282-.018.424-.018 3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.751 3.851c-.398 0-.786-.062-1.157-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.041-1.713s-1.493-1.952-4.001-1.952a6.05 6.05 0 0 0-.796.034m0-4.734v2.138l.424-.027c5.45-.186 9.01 4.469 9.01 4.469s-4.081 4.964-8.33 4.964c-.371 0-.733-.035-1.095-.097v1.325c.301.035.61.062.91.062 3.957 0 6.819-2.023 9.593-4.407.459.371 2.341 1.263 2.729 1.651-2.632 2.208-8.772 3.984-12.252 3.984-.336 0-.654-.018-.971-.053v1.864H24V4.064H8.948zm0 10.326v1.131c-3.657-.654-4.673-4.461-4.673-4.461s1.758-1.943 4.673-2.261v1.237h-.009C7.411 9.85 6.21 11.281 6.21 11.281s.68 2.411 2.738 3.109m-6.493-3.489s2.164-3.197 6.501-3.533V6.201C4.151 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.493-5.935-6.493-5.935z"/></svg>
  