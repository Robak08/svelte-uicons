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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.5 24a5.772 5.772 0 0 1-4.719-2.238A4.341 4.341 0 0 0 9 20c-4.794 0-9-4.673-9-10A10.011 10.011 0 0 1 10 0c9.772 0 14 11.588 14 17.5a6.508 6.508 0 0 1-6.5 6.5ZM10 2C-.468 2.379-.38 17.105 9 18a6.3 6.3 0 0 1 5.242 2.4c2.336 3.251 7.858 1.173 7.758-2.9C22 12.938 18.547 2 10 2ZM6.707 13.707l7-7a1 1 0 0 0-1.414-1.414l-7 7a1 1 0 0 0 1.414 1.414Zm4 2 6-6a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 1.414 1.414Zm4 2 4-4a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414Zm4 2 1-1a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414Zm-13-11 3-3a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414Z"/></svg>
  