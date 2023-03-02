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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.878 17.122c1.134 1.133 3.11 1.133 4.243 0L21 10.243V4c0-2.206-1.794-4-4-4H7C4.794 0 3 1.794 3 4v6.243l6.878 6.879ZM8 4h8c1.308.006 1.307 1.995 0 2H8c-1.308-.006-1.307-1.994 0-2Zm0 4h6c1.308.006 1.307 1.995 0 2H8c-1.308-.006-1.307-1.994 0-2Zm15.5 2.57c.316.665.5 1.392.5 2.137v6.292c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-6.292c0-.746.184-1.472.5-2.137l7.965 7.966c1.862 1.939 5.21 1.94 7.071 0l7.965-7.966Z"/></svg>
  