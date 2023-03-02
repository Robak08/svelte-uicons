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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m10.349 6.302-2.81 7.097-2.777-7.097H0l5.246 12.35-1.912 4.452h4.668l6.985-16.802h-4.638zm5.225 6.732a2.886 2.886 0 1 0 2.886 2.886 2.886 2.886 0 0 0-2.886-2.886zM18.824.896l-4.61 11.078h5.195L24 .896h-5.176z"/></svg>
  