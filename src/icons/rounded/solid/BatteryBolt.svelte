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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 8h-1.101A5.01 5.01 0 0 0 17 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h12a5.009 5.009 0 0 0 4.899-4H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-8.779 5.96-1.728 3.484a1.001 1.001 0 0 1-1.792-.888l1.751-3.53.013-.025H9.423a1.948 1.948 0 0 1-1.563-.769 1.84 1.84 0 0 1-.277-1.646.998.998 0 0 1 .079-.188L9.77 6.523a1 1 0 1 1 1.756.956l-1.943 3.572 3.01-.05c.693 0 1.333.389 1.668 1.016a1.957 1.957 0 0 1-.041 1.944Z"/><path d="M23 8h-1.101A5.01 5.01 0 0 0 17 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h12a5.009 5.009 0 0 0 4.899-4H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-8.779 5.96-1.728 3.484a1.001 1.001 0 0 1-1.792-.888l1.751-3.53.013-.025H9.423a1.948 1.948 0 0 1-1.563-.769 1.84 1.84 0 0 1-.277-1.646.998.998 0 0 1 .079-.188L9.77 6.523a1 1 0 1 1 1.756.956l-1.943 3.572 3.01-.05c.693 0 1.333.389 1.668 1.016a1.957 1.957 0 0 1-.041 1.944Z"/></svg>
  