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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 0a12.792 12.792 0 0 0-3.915.615A7.037 7.037 0 0 1 12 1 7.037 7.037 0 0 1 9.915.615 12.8 12.8 0 0 0 6 0a5.785 5.785 0 0 0-6 6c0 6.443 3.355 12.786 5.768 16.885A2.275 2.275 0 0 0 10 21.726v-6.619a2.075 2.075 0 0 1 1.664-2.08A2 2 0 0 1 14 15v6.726a2.275 2.275 0 0 0 4.232 1.159C20.646 18.785 24 12.442 24 6a5.785 5.785 0 0 0-6-6z"/></svg>
  