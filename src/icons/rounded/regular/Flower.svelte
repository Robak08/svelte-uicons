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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 0 0 0 4 2 2 0 0 0 0-4Zm0 14a5.007 5.007 0 0 1-4.815-3.652 5.074 5.074 0 0 1-4.819-8.4c-3.4-3.511.009-9.6 4.834-8.349a5.014 5.014 0 0 1 9.6 0c4.9-1.216 8.2 4.813 4.829 8.392 3.408 3.538.011 9.442-4.814 8.357A5.007 5.007 0 0 1 12 24Zm-4-6a1 1 0 0 1 1 1 3 3 0 0 0 6 0 1 1 0 0 1 1.506-.863c3.466 1.675 6.4-3.182 3.016-5.259a1.006 1.006 0 0 1 0-1.756c3.313-2.009.522-7.219-3.019-5.254A1 1 0 0 1 15 5a3 3 0 0 0-6 0 1 1 0 0 1-1.5.868C4 3.908 1.138 9.08 4.478 11.07a1.007 1.007 0 0 1 0 1.757c-3.348 2.113-.514 6.973 3.016 5.31A1 1 0 0 1 8 18Z"/></svg>
  