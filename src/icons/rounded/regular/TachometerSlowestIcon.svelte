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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.445 21.516a3.014 3.014 0 0 1-4.073.128l-1.026-.887a1 1 0 0 1 1.308-1.514l1.027.888a1 1 0 0 0 1.357-.037 10 10 0 1 0-14.114-.038 1.016 1.016 0 0 0 1.395.076l1.027-.889a1 1 0 0 1 1.308 1.514l-1.027.888a3.036 3.036 0 0 1-4.119-.176A12.057 12.057 0 0 1 4 4.052C11.021-2.364 22.755 2 23.9 11.437a11.958 11.958 0 0 1-3.455 10.079ZM12 11a2 2 0 0 0-1.988 1.78l-4.867 2.136a1 1 0 1 0 .8 1.832l4.867-2.136A1.993 1.993 0 1 0 12 11Z"/></svg>
  