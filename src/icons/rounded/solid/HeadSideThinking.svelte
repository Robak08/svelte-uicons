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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 11a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm11 2a1.959 1.959 0 0 1-2 2h-.33l-.219 1.655A5.014 5.014 0 0 1 16.494 21H16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-.971a3.886 3.886 0 0 0-.74-2.355A10.993 10.993 0 1 1 19.8 4.419C21.068 5.985 24 11.58 24 13Zm-9.159-3.053.993-.571a1 1 0 1 0-1-1.734l-.982.564A3.994 3.994 0 0 0 12 7.142V6a1 1 0 0 0-2 0v1.142a3.994 3.994 0 0 0-1.855 1.064l-.982-.564a1 1 0 1 0-1 1.734l.993.571A3.938 3.938 0 0 0 7 11a3.938 3.938 0 0 0 .159 1.053l-.993.571a1 1 0 0 0 1 1.734l.982-.564A3.994 3.994 0 0 0 10 14.858V16a1 1 0 0 0 2 0v-1.142a3.994 3.994 0 0 0 1.855-1.064l.982.564a1 1 0 1 0 1-1.734l-.993-.571A3.938 3.938 0 0 0 15 11a3.938 3.938 0 0 0-.159-1.053Z"/></svg>
  