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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.5 13a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm7.351-4.726A9.975 9.975 0 0 0 12 0C5.1 0 3.124 4.674 1.819 7.767A6.372 6.372 0 0 1 .5 10.136a1 1 0 0 0 .379 1.856 15.806 15.806 0 0 0 7.257-1.1 1.5 1.5 0 1 0 1.724-.84 15.09 15.09 0 0 0 4.956-4.467 1 1 0 1 0-1.626-1.162A13.357 13.357 0 0 1 3 10.027c.227-.453.438-.956.662-1.483C4.892 5.628 6.423 2 12 2a7.978 7.978 0 0 1 7.954 7.15 1 1 0 0 0 .816.878A1.5 1.5 0 0 1 20.5 13a1.606 1.606 0 0 1-.252-.027.994.994 0 0 0-1.117.651C18.215 16.221 15.132 19 12 19c-2.9 0-5.6-2.283-6.766-4.539a1 1 0 1 0-1.776.92A11.264 11.264 0 0 0 8 19.953V23a1 1 0 0 0 2 0v-2.262a7.708 7.708 0 0 0 4 0V23a1 1 0 0 0 2 0v-3.046a11.037 11.037 0 0 0 4.732-4.962 3.5 3.5 0 0 0 1.119-6.718Z"/></svg>
  