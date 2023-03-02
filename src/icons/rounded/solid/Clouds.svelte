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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.4 24a3.8 3.8 0 0 1-.832-.146 3.5 3.5 0 0 1-.451-6.589 6.38 6.38 0 0 1 .057-2.732 6 6 0 0 1 11.367-.856 1 1 0 0 0 .766.471 5.012 5.012 0 0 1 3.557 6 4.946 4.946 0 0 1-3.7 3.7A5.322 5.322 0 0 1 19.1 24ZM6 16.23a8.262 8.262 0 0 1 .23-2.169A8 8 0 0 1 21.106 12.3 7.043 7.043 0 0 1 24 14.081a7.954 7.954 0 0 0-5.644-7.721 1.087 1.087 0 0 1-.722-.733 8 8 0 0 0-15.49.842 7.648 7.648 0 0 0 .8 5.179A5.448 5.448 0 0 0 .056 17.3a5.8 5.8 0 0 0 4.1 4.472A5.5 5.5 0 0 1 6 16.23Z"/></svg>
  