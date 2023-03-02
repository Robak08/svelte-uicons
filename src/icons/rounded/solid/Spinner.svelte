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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.056 512.056"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M268.437 512.055c96.436.246 184.764-53.923 228.267-139.989 5.035-10.652.482-23.369-10.17-28.404-10.204-4.824-22.4-.864-27.825 9.034-53.371 105.039-181.788 146.925-286.827 93.553-105.04-53.371-146.925-181.788-93.554-286.828S260.116 12.497 365.155 65.868a213.336 213.336 0 0 1 93.788 94.017c4.979 10.678 17.671 15.299 28.35 10.32s15.299-17.671 10.32-28.35a21.335 21.335 0 0 0-.59-1.17C433.306 14.471 279.337-36.191 153.124 27.526s-176.876 217.687-113.159 343.9c43.529 86.224 131.883 140.608 228.472 140.629z"/></svg>
  