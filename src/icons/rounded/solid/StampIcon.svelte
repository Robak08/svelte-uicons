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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 24H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2Zm3-6c0-2.757-2.243-5-5-5h-3a.993.993 0 0 1-.766-.356.99.99 0 0 1-.22-.813c.58-3.334.985-6.555.985-7.831 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.278.405 4.498.985 7.831a.983.983 0 0 1-.219.812.988.988 0 0 1-.766.357h-3c-2.757 0-5 2.243-5 5 0 .97.701 2 2 2H22c1.299 0 2-1.03 2-2Z"/></svg>
  