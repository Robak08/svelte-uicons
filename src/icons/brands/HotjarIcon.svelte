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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.055 7.814C17.513 1.404 7.118 0 7.118 0s4.798 5.34-1.334 9.567c-3.875 2.666-5.41 6.13-3.75 9.914 1.27 2.899 3.96 4.076 6.861 4.519-.745-1.434-.932-3.505-.381-5.628.055-.212.116-.434.186-.635.813 1.258 2.147 1.946 3.449 1.628 1.783-.424 2.829-2.581 2.342-4.798a5.091 5.091 0 0 0-.536-1.372c.07.017.14.023.212.047 2.225.635 3.301 3.962 2.403 7.435a9.254 9.254 0 0 1-1.326 2.945c3.82-1.23 6.361-4.311 7.06-7.056.737-2.857.178-6.186-1.249-8.752z"/></svg>
  