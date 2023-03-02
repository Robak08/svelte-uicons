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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.63 3.845A2.024 2.024 0 0 0 21.988 3h-3.525c.508-.848 1.076-2.9-.463-3a1 1 0 0 0-1 1 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 1 1 0 0 0-1-1c-1.54.105-.97 2.151-.463 3H2.013A2.007 2.007 0 0 0 .106 5.615 6.6 6.6 0 0 0 1.594 8c.525-.509 1.687-1.6 3.106-2.772a1 1 0 0 1 1.272 1.544c-.518.426-1 .846-1.434 1.228H6a5.006 5.006 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a2.984 2.984 0 0 0-.184-1.034 1.5 1.5 0 0 1-1.781-1.781A2.984 2.984 0 0 0 6 10H3.221L6 21.135A3 3 0 0 0 9 24h6a3 3 0 0 0 3-2.865L20.78 10H18a2.984 2.984 0 0 0-1.034.184 1.5 1.5 0 0 1-1.781 1.781A2.984 2.984 0 0 0 15 13v4a1 1 0 0 1-2 0v-4a5.006 5.006 0 0 1 5-5h1.463c-.43-.382-.916-.8-1.434-1.228A1 1 0 0 1 19.3 5.228 54.897 54.897 0 0 1 22.407 8 6.615 6.615 0 0 0 23.9 5.615a1.937 1.937 0 0 0-.27-1.77ZM15 20a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z"/></svg>
  