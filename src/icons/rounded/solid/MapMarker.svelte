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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm2.958 5.184L13.9 15.215a2.669 2.669 0 0 1-3.79 0L7.054 12.2a7.262 7.262 0 0 1-.012-10.1 6.9 6.9 0 0 1 9.916 0 7.257 7.257 0 0 1 0 10.084ZM16 7a4 4 0 1 0-4 4 4 4 0 0 0 4-4Zm4.753 2.2a9.1 9.1 0 0 1-2.364 4.384l-3.078 3.053a4.667 4.667 0 0 1-3.3 1.371 4.665 4.665 0 0 1-3.3-1.366l-3.063-3.023a9.2 9.2 0 0 1-2.365-4.311 5.066 5.066 0 0 0-1.745 1.083A4.946 4.946 0 0 0 0 14v4.075a5.013 5.013 0 0 0 3.6 4.8l2.87.9A4.981 4.981 0 0 0 7.959 24a5.076 5.076 0 0 0 1.355-.186l5.78-1.71a2.976 2.976 0 0 1 1.573 0l2.387.8A4 4 0 0 0 24 19.021v-5.149A5.009 5.009 0 0 0 20.753 9.2Z"/></svg>
  