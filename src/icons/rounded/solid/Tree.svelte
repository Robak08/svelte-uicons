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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.467 17.3a530.27 530.27 0 0 0-1.557-1.815 2.67 2.67 0 0 0 .616-3.663 477.15 477.15 0 0 0-1.885-2.091 2.475 2.475 0 0 0 1.084-1.073 2.428 2.428 0 0 0-.176-2.526C18.528 6.1 13.886.846 13.886.846a2.608 2.608 0 0 0-3.771 0S5.473 6.1 5.451 6.13A2.3 2.3 0 0 0 5 7.6 1.409 1.409 0 0 0 6.41 9H12a1 1 0 0 1 0 2H5.206s-.707.784-.732.82A2.936 2.936 0 0 0 4 13.385a1.28 1.28 0 0 0 .091.522A1.84 1.84 0 0 0 5.834 15H13a1 1 0 0 1 0 2H3.782s-.228.268-.249.3a3.018 3.018 0 0 0 .6 4.058A2.881 2.881 0 0 0 5.99 22H11v1a1 1 0 0 0 2 0v-1h5.01a2.883 2.883 0 0 0 1.862-.644 3.019 3.019 0 0 0 .595-4.056Z"/></svg>
  