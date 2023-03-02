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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 19c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.001c.179.308.511.5.867.5h2.268c.552 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.041-.507A2.761 2.761 0 0 1 15.999 15c0-1.654 1.346-3 3-3v-1a1 1 0 1 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H19c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 24 19.001ZM13 8h6.54a6.981 6.981 0 0 0-1.591-2.464L14.465 2.05A6.977 6.977 0 0 0 12 .46V7c0 .551.448 1 1 1Zm3.869 15.637A4.966 4.966 0 0 1 15 24H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c.163 0 .324.013.485.024V7c0 1.654 1.346 3 3 3h4.172a3.015 3.015 0 0 0-.11.391 5.034 5.034 0 0 0-2.708 2.76 2.5 2.5 0 0 0-.855-.151H6.5A2.503 2.503 0 0 0 4 15.5v2C4 18.878 5.122 20 6.5 20h7c.171 0 .338-.017.499-.05-.01.54.127 1.074.404 1.552a5.01 5.01 0 0 0 2.466 2.136ZM4 6a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1Zm0 4a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1Zm2.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7Z"/></svg>
  